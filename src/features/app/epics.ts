import { combineEpics, Epic } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap, take } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import Types from 'Types';
import { appActions, appConstants } from '.';

const setUserLocation: Epic<Types.RootAction, Types.RootAction, Types.RootState, Types.Services> = (
  action$,
  {},
  { geolocationService }
) =>
  action$.pipe(
    filter(isOfType(appConstants.INIT_APP)),
    switchMap(() =>
      geolocationService.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      })
    ),
    take(1),
    map(position =>
      appActions.setUserLocation({ x: position.coords.latitude, y: position.coords.longitude })
    ),
    catchError(() => of(appActions.setDefaultUserLocation({ x: 51.1, y: 17.03 })))
  );

export default combineEpics(setUserLocation);
