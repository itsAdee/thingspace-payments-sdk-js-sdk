/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OauthScopeEnum
 */
export enum OauthScopeEnum {
  Discoveryread = 'discovery:read',
  Serviceprofileread = 'serviceprofile:read',
  Serviceprofilewrite = 'serviceprofile:write',
  Serviceregistryread = 'serviceregistry:read',
  Serviceregistrywrite = 'serviceregistry:write',
  TsMecFullaccess = 'ts.mec.fullaccess',
  TsMecLimitaccess = 'ts.mec.limitaccess',
  TsApplicationRo = 'ts.application.ro',
  Read = 'read',
  Write = 'write',
}

/**
 * Schema for OauthScopeEnum
 */
export const oauthScopeEnumSchema: Schema<OauthScopeEnum> = stringEnum(OauthScopeEnum);
