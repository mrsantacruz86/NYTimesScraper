const bodyParser = require('body-parser');
const express =  require('express');
const logger = require('morgan');
const exphbs = require('express-handlebars');
const routes = require('./controllers/routes');

var PORT = process.env.PORT || 8080;
//create an express server
var app = express();
app.use(logger('dev'));

//Public Folder
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});