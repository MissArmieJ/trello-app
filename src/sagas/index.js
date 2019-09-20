import {all} from 'redux-saga/effects'
import {watchForFetchCards} from "./cardSagas"

export default function* rootSaga() {
  yield all([
    watchForFetchCards(),
  ])
}