import { all } from 'redux-saga/effects';
import goodsSaga from './goodsSaga';


export default function* root() {
  yield all([
    ...goodsSaga
    // here you can place your sagas
  ]);
}
