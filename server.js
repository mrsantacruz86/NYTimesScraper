const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(logger('dev'));

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI,{ useNewUrlParser: true,  autoIndex: false});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

app.listen(PORT, function () {
  console.log(`Server listening on: http://localhost:${PORT}`);
});