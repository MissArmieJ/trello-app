import {all} from 'redux-saga/effects'
import {watchForFetchCards} from "./cardSagas"
import {helloSaga} from "./helloSaga";

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchForFetchCards(),
  ])
}