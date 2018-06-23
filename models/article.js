const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },

  date: { 
    type: Date, 
    default: Date.now 
  },
  
  link: {
    type: String,
    required: true
  },

  summary: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    default: false
  }
});

var Article = mongoose.model("Article", ArticleSchema);

// Export the database functions for the controller
module.exports = Article;