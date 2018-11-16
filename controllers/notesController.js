const Note = require('../models/Note');
const Article = require('../models/Article');

module.exports = {
	create: (data, cb) => {
		Note.create(data)
			.then(note => {
				return Article.findOneAndUpdate(
					{ _id: note._articleId },
					{ $push: { notes: note._id } },
					// { new: true } tells the query that we want it to return the updated User -- it returns the original by default
					{ new: true });
			})
			.then(article => cb(article))
			.catch(err => cb(err));
	},

	delete: (query, cb) => {
		Note.deleteMany(query)
			.then(doc => cb(doc))
			.catch(err => cb(err));
	},

	get: (query, cb) => {
		Note.find(query)
		.then(note => cb(note))
		.catch(err => cb(err));
	},

	update: (data, cb) => {
		Note.update(
			{ _id: data._id },
			{ $set: data })
			.then(note => cb(note))
			.catch(err => cb(err));
	}
};