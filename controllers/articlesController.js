const scrape = require('../utils/scraper');
const Article = require('../models/Article');

module.exports = {
  add: (req, res) => {
    scrape(list => {
      Article.insertMany(list)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    });
  },

  delete: (req, res) => {
    Article
      .findOneAndRemove({ _id: req.params.id })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  getAll: (req, res) => {
    Article
      .find(req.query)
      .sort({ _id: -1 })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  update: (req, res) => {
    Article
      .findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  populated: (req, res) => {
    Article
      .findById(req.params.id)
      .populate("notes")
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }

};