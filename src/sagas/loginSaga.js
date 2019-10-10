import {call, put, takeEvery, take} from "redux-saga/effects"
import {loggingIn, loggedIn, callback, cardsFetched} from "../actions/actions"
import login from "../helpers/trelloApi"
import authenticate from "../helpers/trelloApi"
const OAuth = require('oauth').OAuth;
import {push} from "react-router-redux"

export function* LoggingIn(){
  console.log("LoggingIn Saga")

  const requestURL = "https://trello.com/1/OAuthGetRequestToken";
  const accessURL = "https://trello.com/1/OAuthGetAccessToken";
  const authorizeURL = "https://trello.com/1/OAuthAuthorizeToken";
  const appName = "Trello OAuth Example";
  const scope = 'read';
  const expiration = '1hour';
  const key = process.env.TRELLO_KEY;
  const secret = process.env.TRELLO_OAUTH_SECRET;
  const token = process.env.TRELLO_TOKEN
  const loginCallback = "http://localhost:8080/callback";

  const oauth = new OAuth(requestURL, accessURL, key, secret, "1.0A", loginCallback, "HMAC-SHA1")

  console.log("token: " + token)
  // oauth.getOAuthRequestToken(function(error, token, tokenSecret, results){
  // });

    yield put(loggedIn({token: token}))
  // yield put(push(`${authorizeURL}?oauth_token=${oauth_token}&name=${appName}&scope=${scope}&expiration=${expiration}`));

}

export function* watchForLoggingIn() {
  console.log("watchForLoggingIn")
  yield takeEvery(loggingIn, LoggingIn)
}

export function* Authenticate() {
  yield call(authenticate)
}

export function* watchForCallback() {
  console.log("watchForCallback")
  yield take(callback, Authenticate)
}