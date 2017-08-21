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

require("./routing/htmlRoutes.js")(app);
require('./routing/apiRoutes.js')(app);

app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
