import {all} from 'redux-saga/effects'
import {watchForFetchCards} from "./cardSaga"
import {watchForLoggingIn} from "./loginSaga"

export default function* rootSaga() {
  yield all([
    watchForFetchCards(),
    watchForLoggingIn(),
  ])
}