const express = require('express');
const path = require("path")

const app = express();
app.use(express.static('build'));

app.get("*", function(request, response) {
  response.sendFile(__dirname + '/build/index.html');
});
// listen for requests :)
const port = "8080";
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
