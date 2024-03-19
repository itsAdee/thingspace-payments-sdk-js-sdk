/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import { MECDeviceId, mECDeviceIdSchema } from './mECDeviceId';

export interface DeviceList1 {
  deviceIds: MECDeviceId[];
  ipAddress: string;
  apn: string;
}

export const deviceList1Schema: Schema<DeviceList1> = object({
  deviceIds: ['deviceIds', array(lazy(() => mECDeviceIdSchema))],
  ipAddress: ['ipAddress', string()],
  apn: ['apn', string()],
});