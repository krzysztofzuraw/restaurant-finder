import { createStandardAction } from 'typesafe-actions';

import { IGeocodingResultModel } from '~src/models';

const GEOCODING_REQUEST = '@geocoding/GEOCODING_REQUEST';
const GEOCODING_SUCCESS = '@geocoding/GEOCODING_SUCCESS';
const GEOCODING_ERROR = '@geocoding/GEOCODING_ERROR';

export const geocodingRequest = createStandardAction(GEOCODING_REQUEST)<string>();
export const geocodingSuccess = createStandardAction(GEOCODING_SUCCESS)<IGeocodingResultModel>();
export const geocodingError = createStandardAction(GEOCODING_ERROR)<string>();
