import { all, takeLatest, put } from 'redux-saga/effects';

import * as actionTypes from './actionTypes';
import * as actions from './actions';

export function* testSaga(): Generator {
  console.log('esto es una prueba');
  yield put(actions.resetCount());
}

export default function* (): Generator {
  yield all([takeLatest(actionTypes.TEST_SAGA, testSaga)]);
}
