const scrape = require('../utils/scraper');
const Note = require('../models/Note');
const Article = require('../models/Article');

module.exports = {
	create: (data, cb) => {
		console.log(data);
		let note = new Note(data);
		console.log(note);
		note.save(err => {
			if (err) return console.log(err);
			Article.findById(note._articleId, (err, response) => {
				if (err) return console.log(err);
				let article = response;
				article.notes.push(note._id);
				console.log("Returning article found", article);
				Article.update({_id: article._Id}, { $set: article }, cb(note));
			});
		});
	},
	delete: (data, cb) => Note.remove({ _id: data._id }, cb),
	get: (data, cb) => Note.find({ _articleId: data._id }, cb),
	update: (query, cb) => {
		Note.update({ _id: query._id }, { $set: query }, {}, cb)
			.exec((err, doc) => cb(doc));
	}
};