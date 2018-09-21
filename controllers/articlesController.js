const scrape = require('../utils/scraper');
const Article = require('../models/Article');

module.exports = {
  add: cb => {
    scrape(data => {
      let options = { ordered: false };
      Article.collection.insertMany(data, options,
        (err, docs) => cb(err, docs));
    });
  },

  delete: (query, cb) => Article.remove(query, cb),

  get: (query, cb) => {
    Article.find(query).sort({ _id: -1 })
      .exec((err, doc) => cb(doc));
  },

  update: (query, cb) => {
    Article.update({ _id: query.id }, { $set: query }, {}, cb)
      .sort({ _id: -1 })
      .exec((err, doc) => cb(doc));
  }

};