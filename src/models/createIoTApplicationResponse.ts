/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** A success response includes an array of all matching events. Each event includes the full event resource definition. */
export interface CreateIoTApplicationResponse {
  /** An application will be created under the user's Azure subscription with this name and of type IOT central. */
  appName?: string;
  /** Part of the user credentials (from Azure) the user needs to use for calling further TS Core APIs for setting up Azure cloud connector. */
  sharedSecret?: string;
  /** An IOT central endpoint the user can use to see the data that is being streamed. */
  url?: string;
}

export const createIoTApplicationResponseSchema: Schema<CreateIoTApplicationResponse> = object(
  {
    appName: ['appName', optional(string())],
    sharedSecret: ['sharedSecret', optional(string())],
    url: ['url', optional(string())],
  }
);
