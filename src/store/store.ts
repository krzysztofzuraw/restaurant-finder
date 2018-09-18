import { createStore } from 'redux';

import Types from 'Types';
import { rootReducer } from '.';

const configureStore = (initialState?: Types.RootState) => {
  const createdStore = createStore(rootReducer, initialState!);
  return createdStore;
};

const store = configureStore();

export default store;
