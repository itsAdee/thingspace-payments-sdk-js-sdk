/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, unknown } from '../schema';

export interface Filtercriteria2 {
  filterCriteria?: unknown[];
}

export const filtercriteria2Schema: Schema<Filtercriteria2> = object({
  filterCriteria: ['filterCriteria', optional(array(unknown()))],
});
