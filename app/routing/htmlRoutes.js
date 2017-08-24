// packages
const express = require('express');
const path = require('path');
const app = express();

module.exports = function(app) {

  // at survey and home pages, get the relevent html pages and display them
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"))
  });

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'))
  });

};
