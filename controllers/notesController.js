const scrape = require('../utils/scraper');
const Note = require('../models/Note');
const Article = require('../models/Article');

module.exports = {
	create: (data, cb) => {
		let note = new Note(data);
		console.log(note);
		Note.create(note, (err, noteData) => {
			if (err) return console.log(err);
			Article.findByIdAndUpdate(noteData._articleId, { $push: { notes: noteData._id } }, cb(note));
		});
	},
	delete: (data, cb) => Note.remove({ _id: data._id }, cb),
	get: (data, cb) => Note.find({ _articleId: data._id }, cb),
	update: (query, cb) => {
		Note.update({ _id: query._id }, { $set: query }, {}, cb)
			.exec((err, doc) => cb(doc));
	}
};