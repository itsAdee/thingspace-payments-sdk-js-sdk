/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';

export interface EnablePromoExp {
  enablePromoExp?: boolean;
}

export const enablePromoExpSchema: Schema<EnablePromoExp> = object({
  enablePromoExp: ['enablePromoExp', optional(boolean())],
});
