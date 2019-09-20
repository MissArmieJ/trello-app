import {combineReducers} from "redux"
import {routerReducer} from "react-router-redux"
import {cardReducer} from "./cardReducer"
import {loginReducer} from "./loginReducer";

const appReducer = combineReducers({
  routing: routerReducer,
  card: cardReducer,
  login: loginReducer
})

export default appReducer
