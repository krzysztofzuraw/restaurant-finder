import { action } from 'typesafe-actions';

import { IPoint } from '~src/models';
import { appConstants } from '.';

export const initApp = () => action(appConstants.INIT_APP);
export const setUserLocation = (location: IPoint) =>
  action(appConstants.SET_USER_LOCATION, { location });
export const setDefaultUserLocation = (location: IPoint) =>
  action(appConstants.SET_DEFAULT_USER_LOCATION, { location });
