import logging
from typing import List, Mapping, Optional

from blueapi.config import ApplicationConfig
from blueapi.core import BlueskyContext
from blueapi.core.event import EventStream
from blueapi.data_management.visit_directory_provider import (
    LocalVisitServiceClient,
    VisitDirectoryProvider,
    VisitServiceClient,
    VisitServiceClientBase,
)
from blueapi.messaging import StompMessagingTemplate
from blueapi.messaging.base import MessagingTemplate
from blueapi.preprocessors.attach_metadata import attach_metadata
from blueapi.service.handler_base import BlueskyHandler
from blueapi.service.model import DeviceModel, PlanModel, WorkerTask
from blueapi.worker.event import WorkerState
from blueapi.worker.reworker import RunEngineWorker
from blueapi.worker.task import RunPlan
from blueapi.worker.worker import TrackableTask, Worker

LOGGER = logging.getLogger(__name__)


class Handler(BlueskyHandler):
    _context: BlueskyContext
    _worker: Worker
    _config: ApplicationConfig
    _messaging_template: MessagingTemplate
    _initialized: bool = False

    def __init__(
        self,
        config: Optional[ApplicationConfig] = None,
        context: Optional[BlueskyContext] = None,
        messaging_template: Optional[MessagingTemplate] = None,
        worker: Optional[Worker] = None,
    ) -> None:
        self._config = config or ApplicationConfig()
        self._context = context or BlueskyContext()

        self._context.with_config(self._config.env)

        self._worker = worker or RunEngineWorker(
            self._context,
            broadcast_statuses=self._config.env.events.broadcast_status_events,
        )
        self._messaging_template = (
            messaging_template
            or StompMessagingTemplate.autoconfigured(self._config.stomp)
        )

    def start(self) -> None:
        self._worker.start()

        event_topic = self._messaging_template.destinations.topic("public.worker.event")

        self._publish_event_streams(
            {
                self._worker.worker_events: event_topic,
                self._worker.progress_events: event_topic,
                self._worker.data_events: event_topic,
            }
        )

        self._messaging_template.connect()
        self._initialized = True

    def _publish_event_streams(
        self, streams_to_destinations: Mapping[EventStream, str]
    ) -> None:
        for stream, destination in streams_to_destinations.items():
            self._publish_event_stream(stream, destination)

    def _publish_event_stream(self, stream: EventStream, destination: str) -> None:
        stream.subscribe(
            lambda event, correlation_id: self._messaging_template.send(
                destination, event, None, correlation_id
            )
        )

    def stop(self) -> None:
        self._initialized = False
        self._worker.stop()
        if self._messaging_template.is_connected():
            self._messaging_template.disconnect()

    @property
    def plans(self) -> List[PlanModel]:
        return [PlanModel.from_plan(plan) for plan in self._context.plans.values()]

    def get_plan(self, name: str) -> PlanModel:
        return PlanModel.from_plan(self._context.plans[name])

    @property
    def devices(self) -> List[DeviceModel]:
        return [
            DeviceModel.from_device(device) for device in self._context.devices.values()
        ]

    def get_device(self, name: str) -> DeviceModel:
        return DeviceModel.from_device(self._context.devices[name])

    def submit_task(self, task: RunPlan) -> str:
        return self._worker.submit_task(task)

    def clear_pending_task(self, task_id: str) -> str:
        return self._worker.clear_task(task_id)

    def begin_task(self, task: WorkerTask) -> WorkerTask:
        if task.task_id is not None:
            self._worker.begin_task(task.task_id)
        return task

    @property
    def active_task(self) -> Optional[TrackableTask]:
        return self._worker.get_active_task()

    @property
    def state(self) -> WorkerState:
        return self._worker.state

    def pause_worker(self, defer: Optional[bool]) -> None:
        self._worker.pause(defer)

    def resume_worker(self) -> None:
        self._worker.resume()

    def cancel_active_task(self, failure: bool, reason: Optional[str]):
        self._worker.cancel_active_task(failure, reason)

    @property
    def pending_tasks(self) -> List[TrackableTask]:
        return self._worker.get_pending_tasks()

    def get_pending_task(self, task_id: str) -> Optional[TrackableTask]:
        return self._worker.get_pending_task(task_id)

    @property
    def initialized(self) -> bool:
        return self._initialized


HANDLER: Optional[Handler] = None


def setup_handler(
    config: Optional[ApplicationConfig] = None,
) -> None:
    global HANDLER

    provider = None
    plan_wrappers = []
    if config:
        visit_service_client: VisitServiceClientBase
        if config.env.data_writing.visit_service_url is not None:
            visit_service_client = VisitServiceClient(
                config.env.data_writing.visit_service_url
            )
        else:
            visit_service_client = LocalVisitServiceClient()

        provider = VisitDirectoryProvider(
            data_group_name=config.env.data_writing.group_name,
            data_directory=config.env.data_writing.visit_directory,
            client=visit_service_client,
        )

        # Make all dodal devices created by the context use provider if they can
        try:
            from dodal.parameters.gda_directory_provider import (
                set_directory_provider_singleton,
            )

            set_directory_provider_singleton(provider)
        except ImportError:
            logging.error(
                "Unable to set directory provider for ophyd-async devices, "
                "a newer version of dodal is required"
            )

        plan_wrappers.append(lambda plan: attach_metadata(plan, provider))

    handler = Handler(
        config,
        context=BlueskyContext(
            plan_wrappers=plan_wrappers,
            sim=False,
        ),
    )
    handler.start()

    HANDLER = handler


def get_handler() -> Handler:
    """Retrieve the handler which wraps the bluesky context, worker and message bus."""
    if HANDLER is None:
        raise ValueError()
    return HANDLER


def teardown_handler() -> None:
    """Stop all handler tasks. Does nothing if setup_handler has not been called."""
    global HANDLER
    if HANDLER is None:
        return
    handler = get_handler()
    handler.stop()
    HANDLER = None
