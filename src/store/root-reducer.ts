import { combineReducers } from 'redux';

import { appReducer } from '~src/features/app';
import { geocodingReducer } from '~src/features/geocoding';

const rootReducer = combineReducers({ app: appReducer, geocoding: geocodingReducer });

export default rootReducer;
