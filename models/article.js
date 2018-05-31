import mongoose from 'mongoose';

var Schema = mongoose.Schema;
var ArticleSchema = new Schema({
	title: {
    type: String,
    required: true
	},
	link: {
    type: String,
    required: true
	},
	note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

var Aricle = mongoose.model("Article", ArticleSchema);

// Export the database functions for the controller
module.exports = Article;