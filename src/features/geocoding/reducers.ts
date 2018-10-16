import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';

import { IGeocodingResultModel } from '~src/models';
import { geocodingActions } from '.';

export type GeocodingState = Readonly<{
  isFetching: boolean;
  error: string | null;
  geocodingResult: IGeocodingResultModel | null;
}>;

export type GeocodingActions = ActionType<typeof geocodingActions>;

const geocodingResult = (
  state: GeocodingState['geocodingResult'] = null,
  action: GeocodingActions
) => {
  switch (action.type) {
    case getType(geocodingActions.geocodingSuccess):
      return action.payload;

    case getType(geocodingActions.geocodingError):
    case getType(geocodingActions.geocodingRequest):
      return null;

    default:
      return state;
  }
};

const isFetching = (state: GeocodingState['isFetching'] = false, action: GeocodingActions) => {
  switch (action.type) {
    case getType(geocodingActions.geocodingRequest):
      return true;

    case getType(geocodingActions.geocodingError):
    case getType(geocodingActions.geocodingSuccess):
      return false;

    default:
      return state;
  }
};

const error = (state: GeocodingState['error'] = null, action: GeocodingActions) => {
  switch (action.type) {
    case getType(geocodingActions.geocodingError):
      return action.payload;

    case getType(geocodingActions.geocodingRequest):
    case getType(geocodingActions.geocodingSuccess):
      return null;

    default:
      return state;
  }
};

export default combineReducers<GeocodingState, GeocodingActions>({
  geocodingResult,
  isFetching,
  error,
});
