import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import Types from 'Types';
import * as services from '~src/services';
import { composeEnhancers } from '~src/utils';
import { default as rootEpic } from './root-epic';
import { default as rootReducer } from './root-reducer';

const epicMiddleware = createEpicMiddleware<
  Types.RootAction,
  Types.RootAction,
  Types.RootState,
  Types.Services
>({
  dependencies: services,
});

const configureStore = (initialState?: Types.RootState) => {
  const middlewares = [epicMiddleware];
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const createdStore = createStore(rootReducer, initialState!, enhancer);
  epicMiddleware.run(rootEpic);

  return createdStore;
};

const store = configureStore();

export default store;
