from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import Any, Union

from apischema import deserializer, identity, serializer
from apischema.conversions import Conversion

from blueapi.core import BlueskyContext


# TODO: Make a TaggedUnion
class Interrupt(ABC):
    """
    Object that can run with a TaskContext
    """

    _union: Any = None

    # You can use __init_subclass__ to register new subclass automatically
    def __init_subclass__(cls, **kwargs):
        super().__init_subclass__(**kwargs)
        # Deserializers stack directly as a Union
        deserializer(Conversion(identity, source=cls, target=Interrupt))
        # Only Base serializer must be registered (and updated for each subclass) as
        # a Union, and not be inherited
        Interrupt._union = (
            cls if Interrupt._union is None else Union[Interrupt._union, cls]
        )
        serializer(
            Conversion(
                identity, source=Interrupt, target=Interrupt._union, inherited=False
            )
        )

    @abstractmethod
    def do_interrupt(self, ctx: BlueskyContext) -> None:
        """
        Perform the task using the context

        Args:
            ctx (TaskContext): Context for the task
        """
        ...


@dataclass
class Pause(Interrupt):
    defer: bool = False

    def do_interrupt(self, ctx: BlueskyContext) -> None:
        ctx.run_engine.request_pause(self.defer)
