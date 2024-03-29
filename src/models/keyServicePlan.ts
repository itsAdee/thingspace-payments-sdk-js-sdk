/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface KeyServicePlan {
  key?: string;
}

export const keyServicePlanSchema: Schema<KeyServicePlan> = object({
  key: ['key', optional(string())],
});
