const scrape = require('../utils/scraper');
const Article = require('../models/Article');

module.exports = {
	fetch: cb => {
		scrape(data => {
			let articles = data;
			let options = { ordered: false };
			Article.collection.insertMany(articles, options,
				(err, docs) => cb(err, docs));
		});
	},

	delete: (query, cb) => Article.remove(query, cb),

	get: (query, cb) => {
		Article.find(query).sort({ _id: -1 })
			.exec((err, doc) => cb(doc));
	},

	update: (query, cb) => {
		Article.update({ _id: query._id }, { $set: query }, {}, cb)
		.sort({ _id: -1 })
		.exec((err, doc) => cb(doc));
	}
	
}