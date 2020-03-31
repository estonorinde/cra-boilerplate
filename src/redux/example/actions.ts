import { createAction } from '@reduxjs/toolkit';
import * as actionTypes from './actionTypes';

export const testSaga = createAction(actionTypes.TEST_SAGA);
export const increment = createAction(actionTypes.INCREMENT);
export const decrement = createAction(actionTypes.DECREMENT);
export const resetCount = createAction(actionTypes.RESET_COUNT);
