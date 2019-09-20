import {call, put, takeEvery} from "redux-saga/effects"

import {loggingIn, loggedIn} from "../actions/actions"

export function* LoggingIn(){
  yield put(loggedIn({token: "XYZ"}))
}

export function* watchForLoggingIn() {
  yield takeEvery(loggingIn, LoggingIn)
}