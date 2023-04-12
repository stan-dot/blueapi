import functools
from dataclasses import dataclass
from inspect import isclass
from types import FunctionType
from typing import (
    TYPE_CHECKING,
    Any,
    Callable,
    Deque,
    Dict,
    FrozenSet,
    Generic,
    Iterable,
    List,
    Mapping,
    NamedTuple,
    Optional,
    Set,
    Tuple,
    Type,
    TypeVar,
    Union,
)

from pydantic import BaseConfig, BaseModel, Field, create_model, validator
from pydantic.fields import ModelField

if TYPE_CHECKING:
    from pydantic.typing import AnyCallable, AnyClassMethod
else:
    AnyCallable, AnyClassMethod = Any, Any


_PYDANTIC_LIST_TYPES = [List, Tuple, Set]
_PYDANTIC_DICT_TYPES = [Dict, Mapping]

T = TypeVar("T")
U = TypeVar("U")
FieldDefinition = Tuple[Type, Any]
Fields = Mapping[str, FieldDefinition]
Validator = Callable[[AnyCallable], AnyClassMethod]


class DefaultConfig(BaseConfig):
    arbitrary_types_allowed = True


@dataclass
class TypeConverter(Generic[T, U]):
    field_type: Type[T]
    func: Callable[[T], U]

    def __str__(self) -> str:
        type_name = getattr(
            self.field_type, "__name__", str(hash(str(self.field_type)))
        )
        return f"converter_{type_name}"


def create_model_with_type_validators(
    name: str,
    fields: Fields,
    converters: Iterable[TypeConverter],
    config: Type[BaseConfig] = DefaultConfig,
) -> Type[BaseModel]:
    validators = type_validators(fields, converters)
    return create_model(name, **fields, __validators__=validators, __config__=config)


def type_validators(
    fields: Fields,
    converters: Iterable[TypeConverter],
) -> Mapping[str, Validator]:
    all_validators = {}

    for converter in converters:
        # def make_validator(name: str) -> Validator:
        #     def validate_type(value: Any) -> Any:
        #         return apply_to_scalars(converter.func, value)

        #     validate_type.__name__ = str(converter)
        #     return validator(name, allow_reuse=True, pre=True)(validate_type)

        field_names = determine_fields_of_type(fields, converter.field_type)
        for name in field_names:
            val = _make_type_validator(name, converter)
            val_method_name = f"validate_{name}"
            if val_method_name in all_validators:
                raise TypeError(f"Ambiguous type validator for field: {name}")
            all_validators[val_method_name] = val

    return all_validators


def _make_type_validator(name: str, converter: TypeConverter) -> Validator:
    def validate_type(value: Any) -> Any:
        return apply_to_scalars(converter.func, value)

    return validator(name, allow_reuse=True, pre=True)(validate_type)


def determine_fields_of_type(fields: Fields, field_type: Type) -> Iterable[str]:
    for name, field in fields.items():
        annotation, _ = field
        if is_type_or_container_type(annotation, field_type):
            yield name


def is_type_or_container_type(type_to_check: Type, field_type: Type) -> bool:
    return params_contains(type_to_check, field_type)
    # or (
    #     isclass(field_type) and issubclass(field_type, type_to_check)
    # )


def params_contains(type_to_check: Type, field_type: Type) -> bool:
    type_params = getattr(type_to_check, "__args__", []) + getattr(
        type_to_check, "__parameters__", []
    )
    return type_to_check is field_type or any(
        map(lambda v: params_contains(v, field_type), type_params)
    )


def apply_to_scalars(func: Callable[[T], U], obj: Any) -> Any:
    if is_list_type(obj):
        return list(map(lambda v: apply_to_scalars(func, v), obj))
    elif is_dict_type(obj):
        return {k: apply_to_scalars(func, v) for k, v in obj.items()}
    else:
        return func(obj)


def is_list_type(obj: Any) -> bool:
    return any(map(lambda t: isinstance(obj, t), _PYDANTIC_LIST_TYPES))


def is_dict_type(obj: Any) -> bool:
    return any(map(lambda t: isinstance(obj, t), _PYDANTIC_DICT_TYPES))
