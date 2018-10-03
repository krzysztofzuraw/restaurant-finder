import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import { IPoint } from '~src/models';
import { appActions, appConstants } from '.';

export type AppState = Readonly<{
  userLocation: IPoint | null;
}>;

export type AppActions = ActionType<typeof appActions>;

const userLocationReducer = (state: AppState['userLocation'] = null, action: AppActions) => {
  switch (action.type) {
    case appConstants.SET_USER_LOCATION:
    case appConstants.SET_DEFAULT_USER_LOCATION:
      return action.payload.location;

    default:
      return state;
  }
};

export default combineReducers<AppState, AppActions>({
  userLocation: userLocationReducer,
});
