import { createSelector } from 'reselect';

import Types from 'Types';

const getGeocodingState = (state: Types.RootState) => state.geocoding;
const getGeocodingResult = createSelector(getGeocodingState, state => state.geocodingResult);

export const getIsFetching = createSelector(getGeocodingState, state => state.isFetching);
export const getError = createSelector(getGeocodingState, state => state.error);
const getGeocodingFeatures = createSelector(
  getGeocodingResult,
  result => (result ? result.features : [])
);

export const getGeocodingFeaturesFormatted = createSelector(getGeocodingFeatures, features =>
  features.map(feature => ({
    placeName: feature.text,
    addressFirstPart: feature.properties.address,
    addressSecondPart: `${feature.context[1].text} ${feature.context[2].text}`,
  }))
);
