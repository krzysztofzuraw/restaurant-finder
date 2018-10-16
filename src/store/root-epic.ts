import { combineEpics } from 'redux-observable';
import { appEpics } from '~src/features/app';
import { geocodingEpics } from '~src/features/geocoding';

export default combineEpics(appEpics, geocodingEpics);
