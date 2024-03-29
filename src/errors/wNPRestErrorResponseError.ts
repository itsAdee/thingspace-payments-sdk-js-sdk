/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of WNPRestErrorResponse
 */
interface WNPRestErrorResponse {
  /** Rest error response. */
  errorCode?: string;
  /** Error message details. */
  errorMessage?: string;
}

export class WNPRestErrorResponseError extends ApiError<WNPRestErrorResponse> {}
