const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const db = require('../models');
// Library used to decode the HTML into plain text string
const he = require('he');

function scrapeArticles(cb) {
	var url = 'http://www.miamiherald.com/news/';
	axios.get(url)
		.then( response => {
			var articleList = [];
			// Then, we load that into cheerio and save it to $
			var $ = cheerio.load(response.data);

			$('#story-list .teaser').each(function (i, element) {
				var article = {
					title: he.decode($(this).find('h4 > a').html().trim()),
					link: $(this).find('a').attr('href').trim(),
					summary: he.decode($(this).find('p.summary').html().trim())
				}
				db.Article.create(article)
				.then(function (data) {
					// If saved successfully, print the new Library document to the console
					console.log("Article successfully stored in the Database \n" + data);
					articleList.push(data);
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


