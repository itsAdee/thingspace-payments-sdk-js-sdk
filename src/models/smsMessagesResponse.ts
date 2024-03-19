/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, boolean, lazy, object, optional, Schema } from '../schema';
import { GIOSmsMessage, gIOSmsMessageSchema } from './gIOSmsMessage';

export interface SmsMessagesResponse {
  messages?: GIOSmsMessage[];
  hasMoreData?: boolean;
}

export const smsMessagesResponseSchema: Schema<SmsMessagesResponse> = object({
  messages: ['messages', optional(array(lazy(() => gIOSmsMessageSchema)))],
  hasMoreData: ['hasMoreData', optional(boolean())],
});
