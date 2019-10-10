const http = require('http');
const OAuth = require('oauth').OAuth;
const url = require('url');

/*
/     OAuth Setup and Functions
*/
const requestURL = "https://trello.com/1/OAuthGetRequestToken";
const accessURL = "https://trello.com/1/OAuthGetAccessToken";
const authorizeURL = "https://trello.com/1/OAuthAuthorizeToken";
const appName = "Trello OAuth Example";
const scope = 'read';
const expiration = '1hour';

const key = process.env.TRELLO_KEY;
const secret = process.env.TRELLO_OAUTH_SECRET;

const loginCallback = `http://localhost:8080/callback`;

const oauth_secrets = {};

const oauth = new OAuth(requestURL, accessURL, key, secret, "1.0A", loginCallback, "HMAC-SHA1")

export function* login() {
  console.log("login helper")
  oauth.getOAuthRequestToken(function(error, token, tokenSecret, results){
    oauth_secrets[token] = tokenSecret;
    response.redirect(`${authorizeURL}?oauth_token=${token}&name=${appName}&scope=${scope}&expiration=${expiration}`);
  });
};

export function* authenticate() {
  const query = url.parse(req.url, true).query;
  const token = query.oauth_token;
  const tokenSecret = oauth_secrets[token];
  const verifier = query.oauth_verifier;
  oauth.getOAuthAccessToken(
    token,
    tokenSecret,
    verifier,
    function(error, accessToken, accessTokenSecret, results){
      // In a real app, the accessToken and accessTokenSecret should be stored
      oauth.getProtectedResource(
        "https://api.trello.com/1/members/me",
        "GET",
        accessToken,
        accessTokenSecret,
        function(error, data, response){
          // Now we can respond with data to show that we have access to your Trello account via OAuth
          res.send(data)
        });
    });
};


//  login(request, response);
//  callback(request, response);
