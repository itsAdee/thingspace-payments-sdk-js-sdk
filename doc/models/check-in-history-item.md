
# Check in History Item

Check-in history for a device.

## Structure

`CheckInHistoryItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string` | Required | Device IMEI. |
| `clientType` | `string` | Required | Type of client. |
| `result` | `string` | Required | - |
| `failureType` | `string` | Required | - |
| `timeCompleted` | `string` | Required | - |

## Example (as JSON)

```json
{
  "deviceId": "990013907835573",
  "clientType": "clientType6",
  "result": "result8",
  "failureType": "failureType8",
  "timeCompleted": "10/22/2020 19:35:07"
}
```

