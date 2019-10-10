import {createAction} from "redux-actions"

export const fetchCards = createAction("FETCH_CARDS")
export const cardsFetched = createAction("CARDS_FETCHED")

export const loggingIn = createAction("LOGGING_IN")
export const loggedIn = createAction("LOGGED_IN")

export const callback = createAction("CALLBACK")