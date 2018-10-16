import { StateType } from 'typesafe-actions';

import * as services from '~src/services';
import { AppActions } from '~src/features/app';
import { GeocodingActions } from '~src/features/geocoding';
import { rootReducer } from '~src/store';

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>;
  export type RootAction = AppActions | GeocodingActions;
  export type Services = typeof services;
}
