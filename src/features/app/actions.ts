import { action } from 'typesafe-actions';

import { IPoint } from '~src/models';
import { appConstants } from '.';

export const initApp = () => action(appConstants.INIT_APP);
export const setUserLocation = (location: IPoint) =>
  action(appConstants.SET_USER_LOCATION, { location });
export const setUserLocationError = (errorMsg: string) =>
  action(appConstants.SET_USER_LOCATION_ERROR, { errorMsg });
