import {combineReducers} from "redux"
import {routerReducer} from "react-router-redux"
import {cardReducer} from "./cardReducer"

const appReducer = combineReducers({
  routing: routerReducer,
  card: cardReducer,
})

export default appReducer
