require("dotenv").config();
import express from 'express';
import bodyParser from 'body-parser';
//Display server messages to the console.
import logger from 'logger';

var PORT = process.env.PORT || 8080;

var app = express();
app.use(logger('dev'));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
// Set Handlebars.
// var exphbs = require("express-handlebars");
import exphbs from 'express-handlebars';
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller");
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});