/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface SessionTriggerRequest {
  comparator?: string;
  threshold?: number;
}

export const sessionTriggerRequestSchema: Schema<SessionTriggerRequest> = object(
  {
    comparator: ['comparator', optional(string())],
    threshold: ['threshold', optional(number())],
  }
);
