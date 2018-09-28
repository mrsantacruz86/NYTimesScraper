const scrape = require('../utils/scraper');
const Note = require('../models/Note');

module.exports = {
	create: (data, cb) => {
		let newNote = {
			_articleId: data._id,
			date: new Date(),
			text: data.text,
		};
			Note.create( newNote, (err, doc) => {
				if (err) {
					console.log(err);
				} else{
					console.log(doc);
					cb(doc);
				}
			});
	},
	delete: (data, cb) => Note.remove({_id: data._id}, cb),
	get: (data, cb) => Note.find({_articleId: data._id}, cb),
	update: (query, cb) => {
		Note.update({ _id: query._id }, { $set: query }, {}, cb)
			.exec((err, doc) => cb(doc));
	}
}