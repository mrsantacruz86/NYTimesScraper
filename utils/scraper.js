const axios = require('axios');
const cheerio = require('cheerio');
// Library used to decode the HTML into plain text string
const he = require('he');

function scrapeArticles(cb) {
	const url = 'https://www.nytimes.com/section/politics';
	axios.get(url)
		.then(response => {
			var articleList = [];
			// console.log(response.data);
			// Then, we load that into cheerio and save it to $
			var $ = cheerio.load(response.data);
			$('#stream-panel > div > ol > li').each(function (i, element) {
				var article = {
					title: he.decode($(this).find('h2').html().trim()),
					link: "https://www.nytimes.com" + $(this).find('a').attr('href').trim(),
					summary: he.decode($(this).find('p').html().trim()),
					date: new Date(),
					saved: false
				};
				articleList.push(article);
			});
			// console.log(JSON.stringify(articleList, null, 2));
			cb(articleList);
		})
		.catch(error => console.log(error));
}
module.exports = scrapeArticles;

// scrapeArticles( list => console.log("This is the end of the articles list \n \n \n "));