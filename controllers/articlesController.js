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
      .exec((err, doc) => cb(err, doc));
  },

  update: (id, query, cb) => {
    Article.findByIdAndUpdate(id, { $set: query }, (err, data) => {
      cb(err,data);
    });
  }

};