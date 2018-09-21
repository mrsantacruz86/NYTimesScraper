const axios = require('axios');
const cheerio = require('cheerio');
// Library used to decode the HTML into plain text string
const he = require('he');

function scrapeArticles(cb) {
	var url = 'http://www.miamiherald.com/news/';
	axios.get(url)
		.then(response => {
			var articleList = [];
			// Then, we load that into cheerio and save it to $
			var $ = cheerio.load(response.data);

			$('#story-list .teaser').each(function (i, element) {
				var article = {
					title: he.decode($(this).find('h4 > a').html().trim()),
					link: $(this).find('a').attr('href').trim(),
					summary: he.decode($(this).find('p.summary').html().trim()),
					date: new Date(),
					saved: false
				};
				articleList.push(article);
			});
			console.log(JSON.stringify(articleList, null, 2));
			cb(articleList);
		})
		.catch(error => console.log(error));
}

module.exports = scrapeArticles;


