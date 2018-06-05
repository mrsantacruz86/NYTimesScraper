const axios = require('axios');
const cheerio = require('cheerio');

module.exports = function () {
	// First, we grab the body of the html with request
	// The url of the page that we are going to scrape
	var url = 'http://www.miamiherald.com/news/';
	var articleList = [];
	axios.get(url).then(function (response) {
		// Then, we load that into cheerio and save it to $
		var $ = cheerio.load(response.data);

		$('#trending > article').each((i, element) => {
			// console.log(element);
			var article = {};
			article.title = $(this).find('h2.title > a').text();
			article.link = $(this).find('h2.title > a').attr('href');
			article.summary = $(this).find('p.summary').text();

			articleList.push(article);
		});
		// console.log(articleList);
		return articleList;
	});
}


