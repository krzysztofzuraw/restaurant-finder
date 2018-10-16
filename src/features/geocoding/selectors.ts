import { createSelector } from 'reselect';

import Types from 'Types';

const getGeocodingState = (state: Types.RootState) => state.geocoding;
const getGeocodingResult = createSelector(getGeocodingState, state => state.geocodingResult);

export const getIsFetching = createSelector(getGeocodingState, state => state.isFetching);
export const getError = createSelector(getGeocodingState, state => state.error);
export const getGeocodingFeatures = createSelector(getGeocodingResult, result => {
  if (result) {
    return result.features;
  } else {
    return [];
  }
});
