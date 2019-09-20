import {createAction} from "redux-actions"

export const fetchCards = createAction("FETCH_CARDS")
export const cardsFetched = createAction("CARDS_FETCHED")