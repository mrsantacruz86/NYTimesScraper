const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const db = require('../models');

function scrapeArticles(cb) {
	var url = 'http://www.miamiherald.com/news/';
	axios.get(url)
		.then( response => {
			var articleList = [];
			// Then, we load that into cheerio and save it to $
			var $ = cheerio.load(response.data);

			$('#story-list .teaser').each(function (i, element) {
				var article = {
					title: $(this).find('h4 > a').html().trim(),
					link: $(this).find('a').attr('href').trim(),
					summary: $(this).find('p.summary').html().trim()
				}
				// articleList.push(article);
				db.Article.create(article)
					.then(function (data) {
						// If saved successfully, print the new Library document to the console
						console.log("Article successfully stored in the Database \n" + data);
					})
					.catch(function (err) {
						console.log(err.message);
					});
			});
			// console.log(JSON.stringify(articleList, null, 2));
			cb(articleList);

		})
		.catch(error => console.log(error));
}

module.exports = scrapeArticles;


