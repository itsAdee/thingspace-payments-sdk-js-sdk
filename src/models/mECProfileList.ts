/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { MECProfile, mECProfileSchema } from './mECProfile';

export interface MECProfileList {
  profiles?: MECProfile[];
}

export const mECProfileListSchema: Schema<MECProfileList> = object({
  profiles: ['profiles', optional(array(lazy(() => mECProfileSchema)))],
});
