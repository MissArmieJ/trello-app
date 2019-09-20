import {call, put, takeEvery} from "redux-saga/effects"

import fetch from "node-fetch";
import {fetchCards, cardsFetched} from "../actions/actions"

export function* fetchAllCards(){
  yield put(cardsFetched({id: "12345"}))
}

export function* watchForFetchCards() {
  yield takeEvery(fetchCards, fetchAllCards)
}