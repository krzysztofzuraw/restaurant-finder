import { ActionsObservable, StateObservable } from 'redux-observable';
import { Subject } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import Types from 'Types';
import { GeocodingResultModel } from '~src/models';
import { rootReducer } from '~src/store';
import { geocodingActions, geocodingEpics } from '.';

const testScheduler = new TestScheduler((actual, expected) => expect(actual).toEqual(expected));

describe('Geocoding Epics', () => {
  describe('geocodeUserInput', () => {
    it('should handle happy path', () => {
      const initialState = rootReducer(undefined, {} as Types.RootAction);
      const model = new GeocodingResultModel('', []);

      const actions = 'a';
      const toBeExpected = '5s b';
      const values = {
        a: geocodingActions.geocodingRequest('key'),
        b: geocodingActions.geocodingSuccess(model),
      };

      testScheduler.run(({ hot, expectObservable }) => {
        const state$ = new StateObservable(new Subject<Types.RootState>(), initialState);
        const action$ = new ActionsObservable(hot<Types.RootAction>(actions, values));

        const dependencies = {
          geocodingService: {
            searchForPlaces: jest.fn(() => [model]),
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
        };

        const output$ = geocodingEpics(action$, state$, dependencies);

        expectObservable(output$).toBe(toBeExpected, values);
      });
    });
  });
});
