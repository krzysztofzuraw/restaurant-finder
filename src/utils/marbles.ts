import { ActionsObservable, Epic, StateObservable } from 'redux-observable';
import { Subject } from 'rxjs';

import { TestScheduler } from 'rxjs/testing';
import Types from 'Types';
import { rootReducer } from '~src/store';

const testScheduler = new TestScheduler((actual, expected) => expect(actual).toEqual(expected));
const initialState = rootReducer(undefined, {} as Types.RootAction);

export const marbleTest = (
  actions: string,
  expected: string,
  values: { [marble: string]: Types.RootAction },
  services: {},
  epic: Epic
) =>
  testScheduler.run(({ cold, expectObservable }) => {
    const state$ = new StateObservable(new Subject<Types.RootState>(), initialState);
    const action$ = new ActionsObservable(cold<Types.RootAction>(actions, values));
    const dependencies = {
      geocodingService: {
        searchForPlaces: jest.fn(),
      },
      loggingService: {
        logError: jest.fn(),
      },
      configService: {
        getConfig: jest.fn(),
      },
      mapsService: {
        initMap: jest.fn(),
        placeCurrentLocationMarker: jest.fn(),
      },
      geolocationService: {
        getCurrentPosition: jest.fn(),
      },
      ...services,
    };
    const output$ = epic(action$, state$, dependencies);

    expectObservable(output$).toBe(expected, values);
  });
