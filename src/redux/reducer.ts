import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { reducer as example } from './example';

const createRootReducer = (history: History): Reducer =>
  combineReducers({
    router: connectRouter(history),
    example,
  });

export type RootState = ReturnType<typeof createRootReducer> | {};

export default createRootReducer;
