import {call,takeEvery} from "redux-saga/effects"

import fetch from "node-fetch";
import {fetchCards} from "../actions/actions"

function* fetchAllCards(){
  const boardId = "QUpFTbXx"
  const url = "https://api.trello.com/1/boards/" + boardId+ "/cards"
  return yield call(fetch, url, null)
}

export function* watchForFetchCards() {
  yield call(takeEvery, fetchCards, fetchAllCards)
}
