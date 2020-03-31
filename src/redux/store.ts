import {
  configureStore,
  getDefaultMiddleware,
  EnhancedStore,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer, { RootState } from './reducer';
import saga from './saga';

export const history = createBrowserHistory();

export default (preloadedState: RootState = {}): EnhancedStore => {
  const devTools = process.env.NODE_ENV !== 'production';
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    ...getDefaultMiddleware({ thunk: false }),
    routerMiddleware(history),
    sagaMiddleware,
  ];

  const store = configureStore({
    reducer: createRootReducer(history),
    devTools,
    middleware,
    preloadedState,
  });
  sagaMiddleware.run(saga);

  return store;
};
