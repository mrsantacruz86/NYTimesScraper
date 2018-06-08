const axios = require('axios');
const cheerio = require('cheerio');

function scrapeArticles(cb) {
	var url = 'http://www.miamiherald.com/news/';
	axios.get(url)
		.then(function (response) {
			var articleList = [];
			// Then, we load that into cheerio and save it to $
			var $ = cheerio.load(response.data);
			// var art = $('#story-list .teaser').find('h4.title').text();


			$('#story-list .teaser').each(function (i, element) {
				// console.log(element);
				var article = {
					title: $(this).find('h4 > a').html().trim(),
					link: $(this).find('a').attr('href').trim(),
					summary: $(this).find('p.summary').html().trim()
				}
				articleList.push(article);
			});
			console.log(JSON.stringify(articleList, null, 2));
			cb(articleList);

		})
		.catch(error => console.log(error));
}

module.exports = scrapeArticles;


