import { createSelector } from 'reselect';

import Types from 'Types';

const getGeocodingState = (state: Types.RootState) => state.geocoding;

export const getGeocodingResult = createSelector(getGeocodingState, state => state.geocodingResult);
export const isFetching = createSelector(getGeocodingState, state => state.isFetching);
export const error = createSelector(getGeocodingState, state => state.error);
