/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ESIMRequestResponse {
  requestId?: string;
}

export const eSIMRequestResponseSchema: Schema<ESIMRequestResponse> = object({
  requestId: ['requestId', optional(string())],
});
