import "babel-polyfill"
import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import {applyMiddleware, compose, createStore,combineReducers} from "redux"
import {routerMiddleware} from "connected-react-router"
import {Router, Route, Switch} from "react-router-dom"
import {createBrowserHistory} from 'history';
import createSagaMiddleware from "redux-saga"
import {routerReducer} from 'react-router-redux'
import reducers from "./reducers"
import sagas from "./sagas"
import HelloWorld from "./components/HelloWorld";

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const history = createBrowserHistory()

export const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
)


sagaMiddleware.run(sagas)

const main = document.getElementById('main');

render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={HelloWorld} exact={true} />
      </Switch>
    </Router>
  </Provider>,
  main,
  );

