import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

export const initialState = 0;

export default createReducer(initialState, {
  [actions.increment.type]: (state) => state + 1,
  [actions.decrement.type]: (state) => state - 1,
  [actions.resetCount.type]: () => 0,
});
