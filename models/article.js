const mongoose = require('mongoose');
// const {notesController} = require('../controllers');
const Note = require('./Note');

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
  },

  notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }]
});

ArticleSchema.pre('remove', { query: true }, function (next) {
  Note.deleteMany({ _articleId: this._conditions._id }).exec();
  next();
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;