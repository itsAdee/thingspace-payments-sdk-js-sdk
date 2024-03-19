/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { EdgeDiscoveryResultError } from '../errors/edgeDiscoveryResultError';
import {
  CreateServiceProfileResult,
  createServiceProfileResultSchema,
} from '../models/createServiceProfileResult';
import {
  DeleteServiceProfileResult,
  deleteServiceProfileResultSchema,
} from '../models/deleteServiceProfileResult';
import {
  ListServiceProfilesResult,
  listServiceProfilesResultSchema,
} from '../models/listServiceProfilesResult';
import {
  ResourcesServiceProfile,
  resourcesServiceProfileSchema,
} from '../models/resourcesServiceProfile';
import {
  ResourcesServiceProfileWithId,
  resourcesServiceProfileWithIdSchema,
} from '../models/resourcesServiceProfileWithId';
import {
  UpdateServiceProfileResult,
  updateServiceProfileResultSchema,
} from '../models/updateServiceProfileResult';
import { string } from '../schema';
import { BaseController } from './baseController';

export class ServiceProfilesController extends BaseController {
  /**
   * Creates a service profile that describes the resource requirements of a service.
   *
   * @param body         The request body passes all of the needed parameters to
   *                                                       create a service profile. Parameters will be edited here
   *                                                       rather than the **Parameters** section above. The
   *                                                       `maxLatencyMs` and `clientType` parameters are both required
   *                                                       in the request body. **Note:** The `maxLatencyMs` value must
   *                                                       be submitted in multiples of 5. Additionally, "GPU" is
   *                                                       future functionality and the values are not captured.
   * @return Response from the API call
   */
  async createServiceProfile(
    body: ResourcesServiceProfile,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateServiceProfileResult>> {
    const req = this.createRequest('POST', '/serviceprofiles');
    const mapped = req.prepareArgs({
      body: [body, resourcesServiceProfileSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, EdgeDiscoveryResultError, 'HTTP 400 Bad Request.');
    req.throwOn(401, EdgeDiscoveryResultError, 'HTTP 401 Unauthorized.');
    req.defaultToError(EdgeDiscoveryResultError, 'HTTP 500 Internal Server Error.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(createServiceProfileResultSchema, requestOptions);
  }

  /**
   * List all service profiles registered under your API key.
   *
   * @return Response from the API call
   */
  async listServiceProfiles(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListServiceProfilesResult>> {
    const req = this.createRequest('GET', '/serviceprofiles');
    req.throwOn(400, EdgeDiscoveryResultError, 'HTTP 400 Bad Request.');
    req.throwOn(401, EdgeDiscoveryResultError, 'HTTP 401 Unauthorized.');
    req.defaultToError(EdgeDiscoveryResultError, 'HTTP 500 Internal Server Error.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(listServiceProfilesResultSchema, requestOptions);
  }

  /**
   * Returns a specified service profile.
   *
   * @param serviceProfileId
   * @return Response from the API call
   */
  async getServiceProfile(
    serviceProfileId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResourcesServiceProfileWithId>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      serviceProfileId: [serviceProfileId, string()],
    });
    req.appendTemplatePath`/serviceprofiles/${mapped.serviceProfileId}`;
    req.throwOn(400, EdgeDiscoveryResultError, 'HTTP 400 Bad Request.');
    req.throwOn(401, EdgeDiscoveryResultError, 'HTTP 401 Unauthorized.');
    req.defaultToError(EdgeDiscoveryResultError, 'HTTP 500 Internal Server Error.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(resourcesServiceProfileWithIdSchema, requestOptions);
  }

  /**
   * Update the definition of a Service Profile.
   *
   * @param serviceProfileId
   * @param body             The request body passes the rest of the needed
   *                                                           parameters to create a service profile. The
   *                                                           `maxLatencyMs` and `clientType` parameters are both
   *                                                           required in the request body. **Note:** The
   *                                                           `maxLatencyMs` value must be submitted in multiples of 5.
   *                                                           Additionally, "GPU" is future functionality and the
   *                                                           values are not captured. Default values to use are shown.
   * @return Response from the API call
   */
  async updateServiceProfile(
    serviceProfileId: string,
    body: ResourcesServiceProfile,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpdateServiceProfileResult>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      serviceProfileId: [serviceProfileId, string()],
      body: [body, resourcesServiceProfileSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/serviceprofiles/${mapped.serviceProfileId}`;
    req.throwOn(400, EdgeDiscoveryResultError, 'HTTP 400 Bad Request.');
    req.throwOn(401, EdgeDiscoveryResultError, 'HTTP 401 Unauthorized.');
    req.defaultToError(EdgeDiscoveryResultError, 'HTTP 500 Internal Server Error.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(updateServiceProfileResultSchema, requestOptions);
  }

  /**
   * Delete Service Profile based on unique service profile ID.
   *
   * @param serviceProfileId
   * @return Response from the API call
   */
  async deleteServiceProfile(
    serviceProfileId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeleteServiceProfileResult>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      serviceProfileId: [serviceProfileId, string()],
    });
    req.appendTemplatePath`/serviceprofiles/${mapped.serviceProfileId}`;
    req.throwOn(400, EdgeDiscoveryResultError, 'HTTP 400 Bad Request.');
    req.throwOn(401, EdgeDiscoveryResultError, 'HTTP 401 Unauthorized.');
    req.defaultToError(EdgeDiscoveryResultError, 'HTTP 500 Internal Server Error.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(deleteServiceProfileResultSchema, requestOptions);
  }
}