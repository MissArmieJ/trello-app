import "babel-polyfill"
import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import {applyMiddleware, compose, createStore,combineReducers} from "redux"
import {routerMiddleware} from "connected-react-router"
import {Router, Route, Switch} from "react-router-dom"
import {createBrowserHistory} from 'history';
import createSagaMiddleware from "redux-saga"
import reducers from "./reducers"
import sagas from "./sagas"
import CardContainer from "./containers/cardContainer";

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createBrowserHistory()

export const store = createStore(reducers,
  composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
)


//  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//  const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
//   applyMiddleware(...sagaMiddleware)
// ));

sagaMiddleware.run(sagas)

const main = document.getElementById('main');

render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={CardContainer} exact={true} />
      </Switch>
    </Router>
  </Provider>,
  main,
  );

