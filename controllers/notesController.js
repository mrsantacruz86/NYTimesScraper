const scrape = require('../utils/scraper');
const Note = require('../models/Note');
const Article = require('../models/Article');

module.exports = {
	create: (data, cb) => {
		console.log("Printing Data", data);
		let note = new Note(data);
		console.log("Printing Note", note);
		note.save(err => {
			if (err) return console.log(err);
			console.log("Note was created");
			Article.findByIdAndUpdate(note._articleId,
				{ $push: { notes: note._id } },
				cb(note));
			console.log("Note's reference was added to the article");
		});
	},

	delete: (data, cb) => Note.remove({ _id: data._id }, cb),

	get: (query, cb) => {
		Note.find(query, (err, response) => {
			if (err) return console.log(err);
			cb(response);
		});
	},

	update: (query, cb) => {
		Note.update({ _id: query._id }, { $set: query }, {}, cb)
			.exec((err, doc) => cb(doc));
	}
};