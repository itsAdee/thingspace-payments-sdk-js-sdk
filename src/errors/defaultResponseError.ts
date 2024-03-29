/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of DefaultResponse
 */
interface DefaultResponse {
  errorCode?: string;
  errorMessage?: string;
}

export class DefaultResponseError extends ApiError<DefaultResponse> {}
