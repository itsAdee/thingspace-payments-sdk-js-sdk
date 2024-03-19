/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  SearchDeviceByPropertyResponse,
  searchDeviceByPropertyResponseSchema,
} from './searchDeviceByPropertyResponse';

/** A success response includes an array of all matching devices. */
export interface SearchDeviceByPropertyResponseList {
  deviceProperty?: SearchDeviceByPropertyResponse[];
}

export const searchDeviceByPropertyResponseListSchema: Schema<SearchDeviceByPropertyResponseList> = object(
  {
    deviceProperty: [
      'DeviceProperty',
      optional(array(lazy(() => searchDeviceByPropertyResponseSchema))),
    ],
  }
);