/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { HttpClientOptions } from './clientAdapter';
import { OauthScopeEnum } from './models/oauthScopeEnum';
import { OauthToken } from './models/oauthToken';

/** An interface for all configuration parameters required by the SDK. */
export interface Configuration {
  timeout: number;
  vZM2mToken: string;
  environment: Environment;
  /** @deprecated use clientCredentialsAuthCredentials field instead */
  oauthClientId?: string;
  /** @deprecated use clientCredentialsAuthCredentials field instead */
  oauthClientSecret?: string;
  /** @deprecated use clientCredentialsAuthCredentials field instead */
  oauthToken?: OauthToken;
  /** @deprecated use clientCredentialsAuthCredentials field instead */
  oauthScopes?: OauthScopeEnum[];
  clientCredentialsAuthCredentials?: {
    oauthClientId: string;
    oauthClientSecret: string;
    oauthToken?: OauthToken;
    oauthScopes?: OauthScopeEnum[];
  };
  httpClientOptions?: Partial<HttpClientOptions>;
  unstable_httpClientOptions?: any;
}

/** Environments available for API */
export enum Environment {
  Production = 'Production',
}