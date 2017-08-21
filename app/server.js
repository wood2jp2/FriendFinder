const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

var friends = [{
  name: 'Josh',
  photo: 'google.com',
  scores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}];

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "/public/home.html"))
});

app.get('/survey', function(req, res) {
  res.sendFile(path.join(__dirname, "/public/survey.html"))
});

app.get('/api/friends', function(req, res) {
  res.send(friends);
});

app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
