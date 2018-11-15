import { combineEpics, Epic } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, debounceTime, filter, map, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import Types from 'Types';
import { geocodingActions } from '.';

const geocodeUserInput: Epic<
  Types.RootAction,
  Types.RootAction,
  Types.RootState,
  Types.Services
> = (action$, {}, services) =>
  action$.pipe(
    filter(isActionOf(geocodingActions.geocodingRequest)),
    debounceTime(5000),
    switchMap(action => services.geocodingService.searchForPlaces(action.payload)),
    map(result => geocodingActions.geocodingSuccess(result)),
    catchError(err => of(geocodingActions.geocodingError(err)))
  );

export default combineEpics(geocodeUserInput);
