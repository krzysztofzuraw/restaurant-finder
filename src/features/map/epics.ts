import { combineEpics, Epic } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import Types from 'Types';
import { mapActions, mapConstants } from '.';

const initMap: Epic<Types.RootAction, Types.RootAction, Types.RootState, Types.Services> = (
  action$,
  {},
  { mapboxService, loggingService }
) =>
  action$.pipe(
    filter(isOfType(mapConstants.INIT_MAP_REQUEST)),
    switchMap(action =>
      of(mapboxService.initMap(action.payload.el)).pipe(
        map(() => mapActions.initMapSuccess()),
        catchError(err => {
          loggingService.logError(err);
          return of(mapActions.iniMapError(err.message));
        })
      )
    )
  );

export const mapEpics = combineEpics(initMap);
