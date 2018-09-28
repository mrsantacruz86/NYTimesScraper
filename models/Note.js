const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
	_articleId: {
		type: Schema.Types.ObjectId,
		ref: "Article"
	},
	text: String,
	date: {
		type: Date,
		default: Date.now
	}
});

var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;