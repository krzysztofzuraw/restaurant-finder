import { action } from 'typesafe-actions';

import { mapConstants } from '.';

export const initMapRequest = (el: string) => action(mapConstants.INIT_MAP_REQUEST, { el });
export const initMapSuccess = () => action(mapConstants.INIT_MAP_SUCCESS);
export const iniMapError = (errorMessage: string) =>
  action(mapConstants.INIT_MAP_ERROR, { errorMessage });
