/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Coordinates information. */
export interface Coordinates {
  /** Latitude value of location. */
  latitude?: string;
  /** Longitude value of location. */
  longitude?: string;
}

export const coordinatesSchema: Schema<Coordinates> = object({
  latitude: ['latitude', optional(string())],
  longitude: ['longitude', optional(string())],
});
