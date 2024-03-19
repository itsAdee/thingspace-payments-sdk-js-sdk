/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { IntelligenceResultError } from '../errors/intelligenceResultError';
import {
  AnomalyDetectionTrigger,
  anomalyDetectionTriggerSchema,
} from '../models/anomalyDetectionTrigger';
import {
  CreateTriggerRequest,
  createTriggerRequestSchema,
} from '../models/createTriggerRequest';
import {
  GetTriggerResponseList,
  getTriggerResponseListSchema,
} from '../models/getTriggerResponseList';
import {
  UpdateTriggerRequest,
  updateTriggerRequestSchema,
} from '../models/updateTriggerRequest';
import { array, string } from '../schema';
import { BaseController } from './baseController';

export class AnomalyTriggersController extends BaseController {
  /**
   * This corresponds to the M2M-MC SOAP interface, ```GetTriggers```.
   *
   * @return Response from the API call
   */
  async listAnomalyDetectionTriggers(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetTriggerResponseList[]>> {
    const req = this.createRequest('GET', '/m2m/v1/triggers');
    req.baseUrl('Thingspace');
    req.throwOn(400, IntelligenceResultError, 'Bad request');
    req.throwOn(401, IntelligenceResultError, 'Unauthorized');
    req.throwOn(403, IntelligenceResultError, 'Forbidden');
    req.throwOn(404, IntelligenceResultError, 'Not Found / Does not exist');
    req.throwOn(406, IntelligenceResultError, 'Format / Request Unacceptable');
    req.throwOn(429, IntelligenceResultError, 'Too many requests');
    req.defaultToError(IntelligenceResultError, 'Error response');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(array(getTriggerResponseListSchema), requestOptions);
  }

  /**
   * This corresponds to the M2M-MC SOAP interface, ```UpdateTriggerRequest```.
   *
   * @param body         Update Trigger Request
   * @return Response from the API call
   */
  async updateAnomalyDetectionTrigger(
    body: UpdateTriggerRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AnomalyDetectionTrigger>> {
    const req = this.createRequest('PUT', '/m2m/v1/triggers');
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({
      body: [body, updateTriggerRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, IntelligenceResultError, 'Bad request');
    req.throwOn(401, IntelligenceResultError, 'Unauthorized');
    req.throwOn(403, IntelligenceResultError, 'Forbidden');
    req.throwOn(404, IntelligenceResultError, 'Not Found / Does not exist');
    req.throwOn(406, IntelligenceResultError, 'Format / Request Unacceptable');
    req.throwOn(429, IntelligenceResultError, 'Too many requests');
    req.defaultToError(IntelligenceResultError, 'Error response');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(anomalyDetectionTriggerSchema, requestOptions);
  }

  /**
   * This corresponds to the M2M-MC SOAP interface, ```CreateTrigger```.
   *
   * @param body         Create Trigger Request
   * @return Response from the API call
   */
  async createAnomalyDetectionTrigger(
    body: CreateTriggerRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AnomalyDetectionTrigger>> {
    const req = this.createRequest('POST', '/m2m/v1/triggers');
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({
      body: [body, createTriggerRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, IntelligenceResultError, 'Bad request');
    req.throwOn(401, IntelligenceResultError, 'Unauthorized');
    req.throwOn(403, IntelligenceResultError, 'Forbidden');
    req.throwOn(404, IntelligenceResultError, 'Not Found / Does not exist');
    req.throwOn(406, IntelligenceResultError, 'Format / Request Unacceptable');
    req.throwOn(429, IntelligenceResultError, 'Too many requests');
    req.defaultToError(IntelligenceResultError, 'Error response');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(anomalyDetectionTriggerSchema, requestOptions);
  }

  /**
   * This corresponds to the M2M-MC SOAP interface, ```GetTriggers```.
   *
   * @param triggerId trigger ID
   * @return Response from the API call
   */
  async listAnomalyDetectionTriggerSettings(
    triggerId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetTriggerResponseList[]>> {
    const req = this.createRequest('GET');
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({ triggerId: [triggerId, string()] });
    req.appendTemplatePath`/m2m/v1/triggers/${mapped.triggerId}`;
    req.throwOn(400, IntelligenceResultError, 'Bad request');
    req.throwOn(401, IntelligenceResultError, 'Unauthorized');
    req.throwOn(403, IntelligenceResultError, 'Forbidden');
    req.throwOn(404, IntelligenceResultError, 'Not Found / Does not exist');
    req.throwOn(406, IntelligenceResultError, 'Format / Request Unacceptable');
    req.throwOn(429, IntelligenceResultError, 'Too many requests');
    req.defaultToError(IntelligenceResultError, 'Error response');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(array(getTriggerResponseListSchema), requestOptions);
  }

  /**
   * Deletes a specific trigger ID
   *
   * @param triggerId The trigger ID to be deleted
   * @return Response from the API call
   */
  async deleteAnomalyDetectionTrigger(
    triggerId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AnomalyDetectionTrigger>> {
    const req = this.createRequest('DELETE');
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({ triggerId: [triggerId, string()] });
    req.appendTemplatePath`/m2m/v1/triggers/${mapped.triggerId}`;
    req.defaultToError(IntelligenceResultError, 'Error response');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(anomalyDetectionTriggerSchema, requestOptions);
  }
}
