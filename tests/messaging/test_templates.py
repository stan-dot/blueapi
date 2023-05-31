import itertools
from concurrent.futures import Future
from dataclasses import dataclass
from queue import Queue
from typing import Any, Iterable, Type

import pytest

from blueapi.messaging import MessageContext, MessagingTemplate

_TIMEOUT: float = 10.0
_COUNT = itertools.count()


@pytest.fixture
def template(disconnected_template: MessagingTemplate) -> Iterable[MessagingTemplate]:
    disconnected_template.connect()
    yield disconnected_template
    disconnected_template.disconnect()
    print("Disconnected")


@pytest.fixture
def test_queue(template: MessagingTemplate) -> str:
    return template.destinations.queue(f"test-{next(_COUNT)}")


@pytest.fixture
def test_queue_2(template: MessagingTemplate) -> str:
    return template.destinations.queue(f"test-{next(_COUNT)}")


@pytest.fixture
def test_topic(template: MessagingTemplate) -> str:
    return template.destinations.topic(f"test-{next(_COUNT)}")


def send(template: MessagingTemplate, test_queue: str) -> None:
    f: Future = Future()

    def callback(ctx: MessageContext, message: str) -> None:
        print(message)
        f.set_result(message)

    template.subscribe(test_queue, callback)
    template.send(test_queue, "test_message")
    assert f.result(timeout=_TIMEOUT)


def send_to_topic(template: MessagingTemplate, test_topic: str) -> None:
    f: Future = Future()

    def callback(ctx: MessageContext, message: str) -> None:
        f.set_result(message)

    template.subscribe(test_topic, callback)
    template.send(test_topic, "test_message")
    assert f.result(timeout=_TIMEOUT)


def send_on_reply(template: MessagingTemplate, test_queue: str) -> None:
    acknowledge(template, test_queue)

    f: Future = Future()

    def callback(ctx: MessageContext, message: str) -> None:
        f.set_result(message)

    template.send(test_queue, "test_message", callback)
    assert f.result(timeout=_TIMEOUT)


def send_and_recieve(template: MessagingTemplate, test_queue: str) -> None:
    acknowledge(template, test_queue)
    reply = template.send_and_recieve(test_queue, "test", str).result(timeout=_TIMEOUT)
    assert reply == "ack"


def listener(template: MessagingTemplate, test_queue: str) -> None:
    @template.listener(test_queue)
    def server(ctx: MessageContext, message: str) -> None:
        reply_queue = ctx.reply_destination
        if reply_queue is None:
            raise RuntimeError("reply queue is None")
        template.send(reply_queue, "ack", None, ctx.correlation_id)

    reply = template.send_and_recieve(test_queue, "test", str).result(timeout=_TIMEOUT)
    assert reply == "ack"


@dataclass
class Foo:
    a: int
    b: str


def deserialization(
    template: MessagingTemplate, test_queue: str, message: Any, message_type: Type
) -> None:
    def server(ctx: MessageContext, message: message_type) -> None:  # type: ignore
        reply_queue = ctx.reply_destination
        if reply_queue is None:
            raise RuntimeError("reply queue is None")
        template.send(reply_queue, message, None, ctx.correlation_id)

    template.subscribe(test_queue, server)
    reply = template.send_and_recieve(test_queue, message, message_type).result(
        timeout=_TIMEOUT
    )
    assert reply == message


def subscribe_before_connect(
    disconnected_template: MessagingTemplate, test_queue: str
) -> None:
    acknowledge(disconnected_template, test_queue)
    disconnected_template.connect()
    reply = disconnected_template.send_and_recieve(test_queue, "test", str).result(
        timeout=_TIMEOUT
    )
    assert reply == "ack"


def reconnect(template: MessagingTemplate, test_queue: str) -> None:
    acknowledge(template, test_queue)
    reply = template.send_and_recieve(test_queue, "test", str).result(timeout=_TIMEOUT)
    assert reply == "ack"
    template.disconnect()
    template.connect()
    reply = template.send_and_recieve(test_queue, "test", str).result(timeout=_TIMEOUT)
    assert reply == "ack"


def correlation_id(
    template: MessagingTemplate, test_queue: str, test_queue_2: str
) -> None:
    correlation_id = "foobar"
    q: Queue = Queue()

    def server(ctx: MessageContext, msg: str) -> None:
        q.put(ctx)
        template.send(test_queue_2, msg, None, ctx.correlation_id)

    def client(ctx: MessageContext, msg: str) -> None:
        q.put(ctx)

    template.subscribe(test_queue, server)
    template.subscribe(test_queue_2, client)
    template.send(test_queue, "test", None, correlation_id)

    ctx_req: MessageContext = q.get(timeout=_TIMEOUT)
    assert ctx_req.correlation_id == correlation_id
    ctx_ack: MessageContext = q.get(timeout=_TIMEOUT)
    assert ctx_ack.correlation_id == correlation_id


def acknowledge(template: MessagingTemplate, destination: str) -> None:
    def server(ctx: MessageContext, message: str) -> None:
        reply_queue = ctx.reply_destination
        if reply_queue is None:
            raise RuntimeError("reply queue is None")
        template.send(reply_queue, "ack", None, ctx.correlation_id)

    template.subscribe(destination, server)