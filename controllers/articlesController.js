const scrape = require('../utils/scraper');
const Article = require('../models/Article');

module.exports = {
  add: cb => {
    scrape(list => {
      Article.insertMany(list)
        .then(data => cb(data))
        .catch(err => cb(err));
    });
  },

  delete: (query, cb) => {
    Article.findOneAndRemove(query)
      .then(data => cb(data))
      .catch(err => cb(err));
  },

  get: (query, cb) => {
    Article.find(query)
      .sort({ _id: -1 })
      .then(doc => cb(doc))
      .catch(err => cb(err));
  },

  update: (data, cb) => {
    Article.findOneAndUpdate(
      { _id: data._id },
      { $set: data },
      { new: true })
      .then(data => cb(data))
      .catch(err => cb(err));
  },
  populated: (id, cb) => {
    Article.findById(id)
      .populate("notes")
      .then(article => cb(article))
      .catch(err => cb(err));
  }

};