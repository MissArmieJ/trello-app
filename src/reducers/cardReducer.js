import {handleActions} from "redux-actions"
import {fetchCards} from "../actions/actions"

export const initialState = {
  board: "5d6fa03ce8de0a02e9f20a3a"
}

export const cardReducer = handleActions(
  {
    [fetchCards]: state => ({
      ...state,
    }),
  },
  initialState,
)
