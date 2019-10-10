import {all} from 'redux-saga/effects'
import {watchForFetchCards} from "./cardSaga"
import {watchForLoggingIn, watchForCallback} from "./loginSaga"

export default function* rootSaga() {
  yield all([
    watchForFetchCards(),
    watchForLoggingIn(),
    watchForCallback()
  ])
}