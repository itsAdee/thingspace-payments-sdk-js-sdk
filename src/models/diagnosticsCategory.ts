/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { CustomFields, customFieldsSchema } from './customFields';

/** Various types of information about the device, grouped into categories. Each category object contains the category name and a list of Extended Attribute objects as key-value pairs. */
export interface DiagnosticsCategory {
  /** The name of the category. */
  categoryName?: string;
  /** A list of Extended Attribute objects as key-value pairs. */
  extendedAttributes?: CustomFields[];
}

export const diagnosticsCategorySchema: Schema<DiagnosticsCategory> = object({
  categoryName: ['categoryName', optional(string())],
  extendedAttributes: [
    'extendedAttributes',
    optional(array(lazy(() => customFieldsSchema))),
  ],
});