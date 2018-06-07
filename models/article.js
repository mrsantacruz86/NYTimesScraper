const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  
  link: {
    type: String,
    required: true
  },

  summary: {
    type: String
  },
  
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  },
  saved: {
    type: Boolean,
    default: true
  }
});

var Article = mongoose.model("Article", ArticleSchema);

// Export the database functions for the controller
module.exports = Article;