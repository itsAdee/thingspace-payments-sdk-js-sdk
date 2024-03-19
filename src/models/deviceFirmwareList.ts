/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  DeviceFirmwareVersion,
  deviceFirmwareVersionSchema,
} from './deviceFirmwareVersion';

/** Device Firmware Information. */
export interface DeviceFirmwareList {
  /** Account name. */
  accountName: string;
  /** List of device & firmware. */
  deviceFirmwarVersionList?: DeviceFirmwareVersion[];
}

export const deviceFirmwareListSchema: Schema<DeviceFirmwareList> = object({
  accountName: ['accountName', string()],
  deviceFirmwarVersionList: [
    'deviceFirmwarVersionList',
    optional(array(lazy(() => deviceFirmwareVersionSchema))),
  ],
});