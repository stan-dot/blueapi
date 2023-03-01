import itertools
import json
import logging
from pathlib import Path
from typing import Dict, Mapping, Optional

import click
from tqdm import tqdm

from blueapi import __version__
from blueapi.config import StompConfig
from blueapi.messaging import StompMessagingTemplate
from blueapi.worker import StatusView, TaskEvent

from .amq import AmqClient


@click.group(invoke_without_command=True)
@click.version_option(version=__version__, prog_name="blueapi")
@click.pass_context
def main(ctx) -> None:
    # if no command is supplied, run with the options passed
    if ctx.invoked_subcommand is None:
        print("Please invoke subcommand!")


@main.command(name="worker")
@click.option("-c", "--config", type=Path, help="Path to configuration YAML file")
def start_worker(config: Optional[Path]):
    from blueapi.service import start

    start(config)


@main.group()
@click.option(
    "-h",
    "--host",
    type=str,
    help="Broker host",
    default="127.0.0.1",
)
@click.option(
    "-p",
    "--port",
    type=int,
    help="Broker port",
    default=61613,
)
@click.option(
    "-l",
    "--log-level",
    type=str,
    help="Logger level: TRACE, DEBUG, INFO, WARNING, ERROR or CRITICAL, "
    "defaults to WARNING",
    default="WARNING",
)
@click.pass_context
def controller(ctx, host: str, port: int, log_level: str):
    # if no command is supplied, run with the options passed
    if ctx.invoked_subcommand is None:
        print("Please invoke subcommand!")
        return
    logging.basicConfig(level=log_level)
    ctx.ensure_object(dict)
    client = AmqClient(StompMessagingTemplate.autoconfigured(StompConfig(host, port)))
    ctx.obj["client"] = client
    client.app.connect()


@controller.command(name="plans")
@click.pass_context
def get_plans(ctx) -> None:
    client: AmqClient = ctx.obj["client"]
    plans = client.get_plans()
    print("PLANS")
    for plan in plans.plans:
        print("\t" + plan.name)


@controller.command(name="devices")
@click.pass_context
def get_devices(ctx) -> None:
    client: AmqClient = ctx.obj["client"]
    print(client.get_devices().devices)


@controller.command(name="run")
@click.argument("name", type=str)
@click.option("-p", "--parameters", type=str, help="Parameters as valid JSON")
@click.pass_context
def run_plan(ctx, name: str, parameters: str) -> None:
    client: AmqClient = ctx.obj["client"]

    renderer = ProgressBarRenderer()

    def handle_event(event: TaskEvent) -> None:
        renderer.update(event.statuses)
        if event.is_task_terminated():
            print("")
            print("")
            print("")
            print("DONE")

    client.run_plan(name, json.loads(parameters), handle_event, timeout=120.0)


_BAR_FMT = "{desc}: |{bar}| {percentage:3.0f}% [{elapsed}/{remaining}]"


class ProgressBarRenderer:
    _bars: Dict[str, tqdm]
    _count: itertools.count

    def __init__(self) -> None:
        self._bars = {}
        self._count = itertools.count()

    def update(self, status_view: Mapping[str, StatusView]) -> None:
        for name, view in status_view.items():
            if name not in self._bars:
                pos = next(self._count)
                self._bars[name] = tqdm(
                    position=pos,
                    total=1.0,
                    initial=0.0,
                    bar_format=_BAR_FMT,
                )
            self._update(name, view)

    def _update(self, name: str, view: StatusView) -> None:
        bar = self._bars[name]
        if (
            view.current is not None
            and view.target is not None
            and view.initial is not None
            and view.percentage is not None
            and view.time_elapsed is not None
        ):
            bar.desc = view.display_name
            bar.update(view.percentage - bar.n)
            bar.unit = view.unit