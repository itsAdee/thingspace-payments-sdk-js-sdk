/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { FotaV2ResultError } from '../errors/fotaV2ResultError';
import {
  FotaV2Subscription,
  fotaV2SubscriptionSchema,
} from '../models/fotaV2Subscription';
import { string } from '../schema';
import { BaseController } from './baseController';

export class SoftwareManagementSubscriptionsV2Controller extends BaseController {
  /**
   * This endpoint retrieves a FOTA subscription by account.
   *
   * @param account Account identifier.
   * @return Response from the API call
   */
  async getAccountSubscriptionStatus(
    account: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<FotaV2Subscription>> {
    const req = this.createRequest('GET');
    req.baseUrl('Software Management V2');
    const mapped = req.prepareArgs({ account: [account, string()] });
    req.appendTemplatePath`/subscriptions/${mapped.account}`;
    req.throwOn(400, FotaV2ResultError, 'Unexpected error.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(fotaV2SubscriptionSchema, requestOptions);
  }
}