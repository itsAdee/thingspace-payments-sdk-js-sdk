
# Edge Discovery Result Error

Base type for all errors.

## Structure

`EdgeDiscoveryResultError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | HTTP status code or status of response.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `message` | `string` | Required | Error details.<br>**Constraints**: *Maximum Length*: `32` |
| `data` | [`EdgeDiscoveryResultData \| undefined`](../../doc/models/edge-discovery-result-data.md) | Optional | For cases where user input exceeds the boundary values an additional 'data' key will be returned with a relevant description. |

## Example (as JSON)

```json
{
  "status": "status4",
  "message": "message2",
  "data": {
    "additionalMessage": "additionalMessage2"
  }
}
```

