import { all, call } from 'redux-saga/effects';
import { watcher as exampleWatcher } from './example';

export default function* (): Generator {
  yield all([call(exampleWatcher)]);
}
