import { StateType } from 'typesafe-actions';

import { MapActions } from '~src/features/map';
import * as services from '~src/services';

declare module 'Types' {
  export type RootState = StateType<>;
  export type RootAction = MapActions;

  export type Services = typeof services;
}
