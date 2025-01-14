from typing import List, Optional

import pytest
from mock import MagicMock, patch

from blueapi.service.handler_base import BlueskyHandler, HandlerNotStartedError
from blueapi.service.model import DeviceModel, PlanModel, WorkerTask
from blueapi.service.subprocess_handler import SubprocessHandler
from blueapi.worker.event import WorkerState
from blueapi.worker.task import RunPlan
from blueapi.worker.worker import TrackableTask


@pytest.fixture(scope="module")
def sp_handler():
    sp_handler = SubprocessHandler()
    sp_handler.start()
    yield sp_handler
    sp_handler.stop()


def test_initialize():
    sp_handler = SubprocessHandler()
    assert not sp_handler.initialized
    sp_handler.start()
    assert sp_handler.initialized
    # Run a single call to the handler for coverage of dispatch to subprocess
    assert sp_handler.pending_tasks == []
    sp_handler.stop()
    assert not sp_handler.initialized


def test_reload():
    sp_handler = SubprocessHandler()
    sp_handler.start()
    assert sp_handler.initialized
    sp_handler.reload_context()
    assert sp_handler.initialized
    sp_handler.stop()


def test_raises_if_not_started():
    sp_handler = SubprocessHandler()
    with pytest.raises(HandlerNotStartedError):
        sp_handler.state


class DummyHandler(BlueskyHandler):
    @property
    def plans(self) -> List[PlanModel]:
        return [PlanModel(name="plan1"), PlanModel(name="plan2")]

    def get_plan(self, name: str) -> PlanModel:
        return PlanModel(name="plan1")

    @property
    def devices(self) -> List[DeviceModel]:
        return [
            DeviceModel(name="device1", protocols=[]),
            DeviceModel(name="device2", protocols=[]),
        ]

    def get_device(self, name: str) -> DeviceModel:
        return DeviceModel(name="device1", protocols=[])

    def submit_task(self, task: RunPlan) -> str:
        return "0"

    def clear_pending_task(self, task_id: str) -> str:
        return "1"

    def begin_task(self, task: WorkerTask) -> WorkerTask:
        return WorkerTask(task_id=task.task_id)

    @property
    def active_task(self) -> Optional[TrackableTask]:
        return None

    @property
    def state(self) -> WorkerState:
        return WorkerState.IDLE

    def pause_worker(self, defer: Optional[bool]) -> None: ...

    def resume_worker(self) -> None: ...

    def cancel_active_task(self, failure: bool, reason: Optional[str]) -> None: ...

    @property
    def pending_tasks(self) -> List[TrackableTask]:
        return [
            TrackableTask(
                task_id="abc", task=RunPlan(name="sleep", params={"time": 0.0})
            )
        ]

    def get_pending_task(self, task_id: str) -> Optional[TrackableTask]:
        return None

    def start(self): ...

    def stop(self): ...

    # Initialized is a special case as it is not delegated
    # Tested by test_initialize
    @property
    def initialized(self) -> bool:
        raise Exception("Not implemented")


@patch("blueapi.service.subprocess_handler.get_handler")
def test_method_routing(get_handler_mock: MagicMock):

    # Mock get_handler to prevent using a real internal handler
    dummy_handler = DummyHandler()
    get_handler_mock.return_value = dummy_handler

    # For above to work, prevent use of subprocess
    def run_in_same_process(func, args=None):
        if args is None:
            args = []
        return func(*args)

    sp_handler = SubprocessHandler()
    sp_handler._run_in_subprocess = MagicMock(  # type: ignore
        side_effect=run_in_same_process
    )

    # Verify each method is routed correctly

    assert sp_handler.plans == dummy_handler.plans

    assert sp_handler.get_plan("name") == dummy_handler.get_plan("name")

    assert sp_handler.devices == dummy_handler.devices

    assert sp_handler.get_device("name") == dummy_handler.get_device("name")

    assert sp_handler.submit_task(
        RunPlan(name="sleep", params={"time": 0.0})
    ) == dummy_handler.submit_task(RunPlan(name="sleep", params={"time": 0.0}))

    assert sp_handler.clear_pending_task("task_id") == dummy_handler.clear_pending_task(
        "task_id"
    )

    assert sp_handler.begin_task(WorkerTask(task_id="foo")) == dummy_handler.begin_task(
        WorkerTask(task_id="foo")
    )

    assert sp_handler.active_task == dummy_handler.active_task

    assert sp_handler.state == dummy_handler.state

    sp_handler.pause_worker(True)

    sp_handler.resume_worker()

    sp_handler.cancel_active_task(True, "reason")

    assert sp_handler.pending_tasks == dummy_handler.pending_tasks

    assert sp_handler.get_pending_task("task_id") == dummy_handler.get_pending_task(
        "task_id"
    )

    assert sp_handler.start() == dummy_handler.start()

    assert sp_handler.stop() == dummy_handler.stop()
