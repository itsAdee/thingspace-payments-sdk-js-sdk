/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { AccountDeviceList, accountDeviceListSchema } from './accountDeviceList';
import { CustomFields, customFieldsSchema } from './customFields';

/** Request for a carrier action. */
export interface CarrierActionsRequest {
  /** The name of a billing account. */
  accountName?: string;
  /** Custom field names and values, if you want to only include devices that have matching values. */
  customFields?: CustomFields[];
  /** The devices for which you want to restore service, specified by device identifier. */
  devices?: AccountDeviceList[];
  /** set to "true" to suspend with billing, set to "false" to suspend without billing */
  withBilling?: boolean;
  /** The name of a device group, if you want to restore service for all devices in that group. */
  groupName?: string;
  /** The name of a service plan, if you want to only include devices that have that service plan. */
  servicePlan?: string;
}

export const carrierActionsRequestSchema: Schema<CarrierActionsRequest> = object(
  {
    accountName: ['accountName', optional(string())],
    customFields: [
      'customFields',
      optional(array(lazy(() => customFieldsSchema))),
    ],
    devices: ['devices', optional(array(lazy(() => accountDeviceListSchema)))],
    withBilling: ['withBilling', optional(boolean())],
    groupName: ['groupName', optional(string())],
    servicePlan: ['servicePlan', optional(string())],
  }
);