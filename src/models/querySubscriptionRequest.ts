/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { dict, lazy, object, optional, Schema, string } from '../schema';
import { AccountIdentifier, accountIdentifierSchema } from './accountIdentifier';
import {
  ResourceIdentifier,
  resourceIdentifierSchema,
} from './resourceIdentifier';

/** Fields and values to match. */
export interface QuerySubscriptionRequest {
  /** The ID of the authenticating billing account, in the format `{"billingaccountid":"1234567890-12345"}`. */
  accountidentifier?: AccountIdentifier;
  /** A comma-separated list of properties and comparator values to match against subscriptions in the ThingSpace account. See Working with Query Filters for more information. If the request does not include `$selection`, the response will include all subscriptions to which the requesting user has access. */
  selection?: Record<string, string>;
  /** The ID of the target to delete, in the format {"id": "dd1682d3-2d80-cefc-f3ee-25154800beff"}. */
  resourceidentifier?: ResourceIdentifier;
}

export const querySubscriptionRequestSchema: Schema<QuerySubscriptionRequest> = object(
  {
    accountidentifier: [
      'accountidentifier',
      optional(lazy(() => accountIdentifierSchema)),
    ],
    selection: ['$selection', optional(dict(string()))],
    resourceidentifier: [
      'resourceidentifier',
      optional(lazy(() => resourceIdentifierSchema)),
    ],
  }
);
