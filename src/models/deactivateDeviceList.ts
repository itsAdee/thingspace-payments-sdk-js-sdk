/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Id, idSchema } from './id';

export interface DeactivateDeviceList {
  ids?: Id[];
}

export const deactivateDeviceListSchema: Schema<DeactivateDeviceList> = object({
  ids: ['ids', optional(array(lazy(() => idSchema)))],
});
