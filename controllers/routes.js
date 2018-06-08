const express = require('express');
const router = express.Router();
const scrapeArticles = require('../utils/scraper');

const db = require('../models');

const articlesData = require("../utils/dummyData");

router.get("/", function (req, res) {
	res.render("index", articlesData);
});

router.get("/scrape", function (req, res) {
	scrapeArticles(function(data){
		res.send(data);
	})
});

// Create all our routes and set up logic within those routes where required.
//CRUD Methods

// // Create method
router.post("/articles/add", (req, res) => {
	var article = {
		title: req.body.title,
		link: req.body.link,
		summary: req.body.summary
	}
	db.Article.create(article)
		.then(function (data) {
			// If saved successfully, print the new Library document to the console
			console.log("Article successfully stored in the Database \n" + data);
		})
		.catch(function (err) {
			console.log(err.message);
		});
});

//Read Articles
router.get("/articles/:id", (req, res) => {
	// Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
	db.Article.findOne({ _id: req.params.id })
		// ..and populate all of the notes associated with it
		.populate("note")
		.then(function (dbArticle) {
			// If we were able to successfully find an Article with the given id, send it back to the client
			res.json(dbArticle);
		})
		.catch(function (err) {
			// If an error occurred, send it to the client
			res.json(err);
		});
});

// // Uptade some feature
// router.put("/api/burgers/:id", function (req, res) {
// 	var condition = { "id": req.params.id };
// 	// console.log("condition", condition);
// 	burger.update({
// 		devoured: req.body.devoured
// 	}, condition, function (result) {
// 		if (result.changedRows == 0) {
// 			// If no rows were changed, then the ID must not exist, so 404
// 			return res.status(404).end();
// 		} else {
// 			res.status(200).end();
// 		}
// 	});
// });

// // Delete record
// router.delete("/api/burgers/:id", function (req, res) {
// 	var condition = { "id": req.params.id };

// 	burger.delete(condition, function (result) {
// 		if (result.affectedRows == 0) {
// 			// If no rows were changed, then the ID must not exist, so 404
// 			return res.status(404).end();
// 		} else {
// 			res.status(200).end();
// 		}
// 	});
// });

// Export routes for server.js to use.
module.exports = router;