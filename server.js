const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(logger('dev'));

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, autoIndex: false })
  .then(() => console.log("MongoDB connected successfuly"))
  .catch(err => console.log(err));

app.listen(PORT, function () {
  console.log(`🌎\t ==> API Server listening on Port:${PORT}`);
});