/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface UsageHistory {
  bytesUsed?: number;
  serviceplan?: string;
  smsUsed?: number;
  moSMS?: number;
  mtSMS?: number;
  source?: string;
  eventDateTime?: string;
}

export const usageHistorySchema: Schema<UsageHistory> = object({
  bytesUsed: ['bytesUsed', optional(number())],
  serviceplan: ['serviceplan', optional(string())],
  smsUsed: ['smsUsed', optional(number())],
  moSMS: ['moSMS', optional(number())],
  mtSMS: ['mtSMS', optional(number())],
  source: ['source', optional(string())],
  eventDateTime: ['eventDateTime', optional(string())],
});
