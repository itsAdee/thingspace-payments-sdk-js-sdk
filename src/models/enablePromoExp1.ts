/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

export interface EnablePromoExp1 {
  key?: string;
  value?: boolean;
}

export const enablePromoExp1Schema: Schema<EnablePromoExp1> = object({
  key: ['key', optional(string())],
  value: ['value', optional(boolean())],
});