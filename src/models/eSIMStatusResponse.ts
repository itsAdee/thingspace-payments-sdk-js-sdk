/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { ESIMsubrequest, eSIMsubrequestSchema } from './eSIMsubrequest';

export interface ESIMStatusResponse {
  requestId?: string;
  status?: string;
  subrequests?: ESIMsubrequest[];
}

export const eSIMStatusResponseSchema: Schema<ESIMStatusResponse> = object({
  requestId: ['requestId', optional(string())],
  status: ['status', optional(string())],
  subrequests: [
    'subrequests',
    optional(array(lazy(() => eSIMsubrequestSchema))),
  ],
});
