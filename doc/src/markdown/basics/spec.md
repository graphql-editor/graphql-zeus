---
link: spec
title: Specification
order: 4
category: Basics
---

## Zeus Spec

Promise of type query data object is returned.

```
PROMISE_RETURNING_OBJECT = Chain.[OPERATION_NAME]({
    ...FUNCTION_FIELD_PARAMS
})(
    ...QUERY_OBJECT
).then ( RESPONSE_OBJECT => RESPONSE_OBJECT[OPERATION_FIELD] )
```

Simple function params object

```
FUNCTION_FIELD_PARAMS = {
  KEY: VALUE
}
```

Query object

```
QUERY_OBJECT = {
    ...RETURN_PARAMS
}
```

Return params is an object containing RETURN_KEY - true if it is a `scalar`, RETURN_PARAMS if `type` otherwise it is a function where you pass field params and type return params.

```
RETURN_PARAMS = {
    RETURN_KEY: true,
    RETURN_KEY: {
        ...RETURN_PARAMS
    },
    RETURN_FUNCTION_KEY:[
        {
            ...FUNCTION_FIELD_PARAMS
        },
        {
            ...RETURN_PARAMS
        }
    ]
}
```

### Use Alias Spec

```
RETURN_PARAMS = {
  __alias: RETURN_PARAMS
}
```

Access aliased operation type-safe

```
PROMISE_RETURNING_OBJECT[ALIAS_STRING]
```
