import {handleActions} from "redux-actions"
import {loggingIn, loggedIn} from "../actions/actions"

const initialState = {
  token: ""
}

export const loginReducer = handleActions(
  {
    [loggingIn]: state => ({
      ...state,
    }),
    [loggedIn]: (state, action) => ({
      ...state,
      token: action.payload.token //TODO
    }),
  },
  initialState
)
