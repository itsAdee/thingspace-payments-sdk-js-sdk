/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** Filter out the dates. */
export interface DateFilter {
  /** Only include devices that were added after this date and time. */
  earliest: string;
  /** Only include devices that were added before this date and time. */
  latest: string;
}

export const dateFilterSchema: Schema<DateFilter> = object({
  earliest: ['earliest', string()],
  latest: ['latest', string()],
});