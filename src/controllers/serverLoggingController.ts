/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { FotaV2ResultError } from '../errors/fotaV2ResultError';
import {
  CheckInHistoryItem,
  checkInHistoryItemSchema,
} from '../models/checkInHistoryItem';
import { array, string } from '../schema';
import { BaseController } from './baseController';

export class ServerLoggingController extends BaseController {
  /**
   * Check-in history can be retrieved for any device belonging to the account, not necessarily with
   * logging enabled.
   *
   * @param account  Account identifier.
   * @param deviceId Device IMEI identifier.
   * @return Response from the API call
   */
  async getDeviceCheckInHistory(
    account: string,
    deviceId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CheckInHistoryItem[]>> {
    const req = this.createRequest('GET');
    req.baseUrl('Software Management V2');
    const mapped = req.prepareArgs({
      account: [account, string()],
      deviceId: [deviceId, string()],
    });
    req.appendTemplatePath`/logging/${mapped.account}/devices/${mapped.deviceId}/checkInHistory`;
    req.throwOn(400, FotaV2ResultError, 'Unexpected error.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(array(checkInHistoryItemSchema), requestOptions);
  }
}
