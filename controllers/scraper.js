var axios = require('axios');
var cheerio = require('cheerio');

module.exports = function() {
	// First, we grab the body of the html with request
	// The url of the page that we are going to scrape
	var url = `https://www.nytimes.com/section/us?action=click&pgtype=Homepage&region=TopBar&module=HPMiniNav&contentCollection=U.S.&WT.nav=page`;
	var articleList = [];
	axios.get(url).then(function (response) {
		// Then, we load that into cheerio and save it to $
		var $ = cheerio.load(response.data);
		
		var articles = $('div.story-body');

		articles.forEach(element => {
			var article = {
				title: element.find('h2.headlines').text(),
				link: element.find('a').attr('href'),
				sumary: element.find('sumary').text()
			}
			console.log(article);
			articleList.push(article);
		});
	})
	.catch(function(err){
		console.log(err);
	});
	return articleList;
	
}


