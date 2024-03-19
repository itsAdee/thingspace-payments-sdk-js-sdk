/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  SensitivityParameters,
  sensitivityParametersSchema,
} from './sensitivityParameters';

/** Settings for anomaly detection. */
export interface AnomalyDetectionSettings {
  /** Indicates if the account name used has anomaly detection.<br />Success - The account has anomaly detection.<br />Failure - The account does not have anomaly detection. */
  accountName?: string;
  /** Details for sensitivity parameters. */
  sensitivityParameter?: SensitivityParameters;
  /** Indicates if anomaly detection is active on the account<br />Active - Anomaly detection is active<br />Disabled- Anomaly detection is not active. */
  status?: string;
}

export const anomalyDetectionSettingsSchema: Schema<AnomalyDetectionSettings> = object(
  {
    accountName: ['accountName', optional(string())],
    sensitivityParameter: [
      'sensitivityParameter',
      optional(lazy(() => sensitivityParametersSchema)),
    ],
    status: ['status', optional(string())],
  }
);
