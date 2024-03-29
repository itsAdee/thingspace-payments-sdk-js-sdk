
# Oauth Provider Error

OAuth 2 Authorization endpoint exception.

## Structure

`OauthProviderError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `error` | [`OauthProviderErrorEnum`](../../doc/models/oauth-provider-error-enum.md) | Required | Gets or sets error code. |
| `errorDescription` | `string \| undefined` | Optional | Gets or sets human-readable text providing additional information on error.<br>Used to assist the client developer in understanding the error that occurred. |
| `errorUri` | `string \| undefined` | Optional | Gets or sets a URI identifying a human-readable web page with information about the error, used to provide the client developer with additional information about the error. |

## Example (as JSON)

```json
{
  "error": "unsupported_grant_type",
  "error_description": "error_description8",
  "error_uri": "error_uri8"
}
```

