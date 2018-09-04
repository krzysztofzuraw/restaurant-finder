import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import { mapActions, mapConstants } from '.';

export interface MapState {
  isFetching: boolean;
  errorMessage: undefined | string;
}

export type MapActions = ActionType<typeof mapActions>;

const isFetching = (state: MapState['isFetching'] = false, action: MapActions) => {
  switch (action.type) {
    case mapConstants.INIT_MAP_REQUEST:
      return true;

    case mapConstants.INIT_MAP_ERROR:
    case mapConstants.INIT_MAP_SUCCESS:
    default:
      return state;
  }
};

const errorMessage = (state: MapState['errorMessage'] = undefined, action: MapActions) => {
  switch (action.type) {
    case mapConstants.INIT_MAP_ERROR:
      return action.payload.errorMessage;

    case mapConstants.INIT_MAP_REQUEST:
    case mapConstants.INIT_MAP_SUCCESS:
    default:
      return state;
  }
};

export const mapReducer = combineReducers<MapState, MapActions>({ isFetching, errorMessage });
