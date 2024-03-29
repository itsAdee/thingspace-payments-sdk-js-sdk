/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import { Activate, activateSchema } from './activate';
import { DeviceList1, deviceList1Schema } from './deviceList1';

export interface ChangePmecDeviceStateBulkActivateRequest {
  accountName: string;
  deviceList: DeviceList1[];
  activate: Activate;
}

export const changePmecDeviceStateBulkActivateRequestSchema: Schema<ChangePmecDeviceStateBulkActivateRequest> = object(
  {
    accountName: ['accountName', string()],
    deviceList: ['deviceList', array(lazy(() => deviceList1Schema))],
    activate: ['activate', lazy(() => activateSchema)],
  }
);
