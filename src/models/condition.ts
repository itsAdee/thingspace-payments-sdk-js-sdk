/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Keyschunk2, keyschunk2Schema } from './keyschunk2';

export interface Condition {
  condition?: Keyschunk2[];
}

export const conditionSchema: Schema<Condition> = object({
  condition: ['condition', optional(array(lazy(() => keyschunk2Schema)))],
});
