from dataclasses import dataclass
from inspect import Parameter, isclass, signature
from typing import (
    TYPE_CHECKING,
    Any,
    Callable,
    Dict,
    Generic,
    Iterable,
    List,
    Mapping,
    Optional,
    Set,
    Tuple,
    Type,
    TypeVar,
    Union,
    overload,
)

from pydantic import BaseConfig, BaseModel, create_model, validator
from pydantic.fields import Undefined

if TYPE_CHECKING:
    from pydantic.typing import AnyCallable, AnyClassMethod
else:
    AnyCallable, AnyClassMethod = Any, Any


_PYDANTIC_LIST_TYPES: List[Type] = [List, Tuple, Set]  # type: ignore
_PYDANTIC_DICT_TYPES: List[Type] = [Dict, Mapping]

T = TypeVar("T")
U = TypeVar("U")
FieldDefinition = Tuple[Type, Any]
Fields = Mapping[str, FieldDefinition]
Validator = Union[Callable[[AnyCallable], AnyClassMethod], classmethod]


@dataclass
class TypeValidatorDefinition(Generic[T, U]):
    """
    Definition of a validator to be applied to all
    types during validation.

    Args:
        field_type: Convert all fields of this type
        func: Convert using this function
    """

    field_type: Type[T]
    func: Callable[[U], T]

    def __str__(self) -> str:
        type_name = getattr(
            self.field_type, "__name__", str(hash(str(self.field_type)))
        )
        return f"converter_{type_name}"


@overload
def create_model_with_type_validators(
    name: str,
    definitions: Iterable[TypeValidatorDefinition],
    *,
    fields: Fields,
    config: Optional[Type[BaseConfig]] = None,
) -> Type[BaseModel]:
    """
    Create a model based on the fields supplied

    Args:
        name: Name of the new model
        definitions: Definitions of how to validate which types of field
        fields: Definitions of fields from which to make the model.
        config: Pydantic config for the model. Defaults to None.

    Returns:
        Type[BaseModel]: A new pydantic model with the fields and
            type validators supplied.
    """

    ...


@overload
def create_model_with_type_validators(
    name: str,
    definitions: Iterable[TypeValidatorDefinition],
    *,
    func: Callable[..., Any],
    config: Optional[Type[BaseConfig]] = None,
) -> Type[BaseModel]:
    """
    Create a model from a function's parameters with type
    validators.

    Args:
        name: Name of the new model
        definitions: Definitions of how to validate which types of field
        func: The model is constructed from the function parameters,
            which must be type-annotated.
        config: Pydantic config for the model. Defaults to None.

    Returns:
        Type[BaseModel]: A new pydantic model based on the
            function parameters.
    """

    ...


@overload
def create_model_with_type_validators(
    name: str,
    definitions: Iterable[TypeValidatorDefinition],
    *,
    base: Type[BaseModel],
) -> Type[BaseModel]:
    """
    Apply type validators to an existing model

    Args:
        name: Name of the new model
        definitions: Definitions of how to validate which types of field
        base (Type[BaseModel]): Base class for the model

    Returns:
        Type[BaseModel]: A new version of `base` with type validators
    """

    ...


def create_model_with_type_validators(
    name: str,
    definitions: Iterable[TypeValidatorDefinition],
    *,
    fields: Optional[Fields] = None,
    base: Optional[Type[BaseModel]] = None,
    func: Optional[Callable[..., Any]] = None,
    config: Optional[Type[BaseConfig]] = None,
) -> Type[BaseModel]:
    """
    Create a pydantic model with type validators according to
    definitions given. Validators are applied to all fields
    of a particular type.

    Args:
        name: Name of the new model
        definitions: Definitions of how to validate which types of field
        fields: Definitions of fields from which to make the model.
            Defaults to None.
        base: Optional base class for the model. Defaults to None.
        func: Function, if supplied, the model is constructed from the
            function parameters, which must be type-annotated.
            Defaults to None.
        config: Pydantic config for the model. Defaults to None.

    Returns:
        Type[BaseModel]: A new pydantic model
    """

    all_fields = {**(fields or {})}
    if base is not None:
        all_fields = {**all_fields, **_extract_fields_from_model(base)}
    if func is not None:
        all_fields = {**all_fields, **_extract_fields_from_function(func)}
    for name, field in all_fields.items():
        annotation, val = field
        model_type = find_model_type(annotation)
        if model_type is not None:
            recursed = create_model_with_type_validators(
                annotation.__name__, definitions, base=model_type
            )
            all_fields[name] = recursed, val
    validators = _type_validators(all_fields, definitions)
    return create_model(  # type: ignore
        name, **all_fields, __base__=base, __validators__=validators, __config__=config
    )


def _extract_fields_from_model(model: Type[BaseModel]) -> Fields:
    return {
        name: (field.type_, field.field_info)
        for name, field in model.__fields__.items()
    }


def _extract_fields_from_function(func: Callable[..., Any]) -> Fields:
    fields: Dict[str, FieldDefinition] = {}
    for name, param in signature(func).parameters.items():
        type_annotation = param.annotation
        default_value = param.default
        if default_value is Parameter.empty:
            default_value = Undefined

        anno = (type_annotation, default_value)
        fields[name] = anno

    return fields


def _type_validators(
    fields: Fields,
    definitions: Iterable[TypeValidatorDefinition],
) -> Mapping[str, Validator]:
    """
    Generate type validators from fields and definitions.

    Args:
        fields: fields to validate.
        definitions: Definitions of how to validate which types of field

    Raises:
        TypeError: If a validator can be applied to more than one field.

    Returns:
        Mapping[str, Validator]: Dict-like structure mapping validator
            names to pydantic validators.
    """

    all_validators = {}

    for definition in definitions:
        field_names = _determine_fields_of_type(fields, definition.field_type)
        for name in field_names:
            val = _make_type_validator(name, definition)
            val_method_name = f"validate_{name}"
            if val_method_name in all_validators:
                raise TypeError(f"Ambiguous type validator for field: {name}")
            all_validators[val_method_name] = val

    return all_validators


def _make_type_validator(name: str, definition: TypeValidatorDefinition) -> Validator:
    def validate_type(value: Any) -> Any:
        return apply_to_scalars(definition.func, value)

    return validator(name, allow_reuse=True, pre=True, always=True)(validate_type)


def _determine_fields_of_type(fields: Fields, field_type: Type) -> Iterable[str]:
    for name, field in fields.items():
        annotation, _ = field
        if is_type_or_container_type(annotation, field_type):
            yield name


def is_type_or_container_type(type_to_check: Type, field_type: Type) -> bool:
    return params_contains(type_to_check, field_type)


def params_contains(type_to_check: Type, field_type: Type) -> bool:
    type_params = list(
        getattr(
            type_to_check,
            "__args__",
            [],
        )
    ) + list(
        getattr(
            type_to_check,
            "__parameters__",
            [],
        )
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


def find_model_type(anno: Type) -> Optional[Type[BaseModel]]:
    if isclass(anno):
        if issubclass(anno, BaseModel):
            return anno
        elif hasattr(anno, "__pydantic_model__"):
            return getattr(anno, "__pydantic_model__")
    return None