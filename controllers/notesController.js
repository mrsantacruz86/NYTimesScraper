const Note = require('../models/Note');
const Article = require('../models/Article');

module.exports = {
	add: (req, res) => {
		Note
			.create(req.body)
			.then(data => res.json(data))
			.then(data => {
				Article.findOneAndUpdate(
					{ _id: data._articleId },
					{ $push: { notes: data._id } },
					{ new: true });
			})
			.catch(err => res.status(422).json(err));
	},

	get: (req, res) => {
		Note
			.find(req.query)
			.sort({ _id: -1 })
			.then(data => res.json(data))
			.catch(err => res.status(422).json(err));
	},

	update: (req, res) => {
		Note
			.findOneAndUpdate(
				{ _id: req.params.id },
				{ $set: req.body },
				{ new: true })
			.then(data => res.json(data))
			.catch(err => res.status(422).json(err));
	},

	delete: (req, res) => {
		Note
			.deleteOne({ _id: req.params.id })
			.then(data => res.json(data))
			.catch(err => res.status(422).json(err));
	}
};