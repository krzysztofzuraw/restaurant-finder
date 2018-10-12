import { combineEpics, Epic } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import Types from 'Types';
import { geocodingActions } from '.';

const geocodeUserInput: Epic<
  Types.RootAction,
  Types.RootAction,
  Types.RootState,
  Types.Services
> = (action$, {}, { geocodingService }) =>
  action$.pipe(
    filter(isActionOf(geocodingActions.geocodingRequest)),
    switchMap(action => geocodingService.searchForPlaces(action.payload)),
    map(result => geocodingActions.geocodingSuccess(result)),
    catchError(err => of(geocodingActions.geocodingError(err)))
  );

export default combineEpics(geocodeUserInput);
