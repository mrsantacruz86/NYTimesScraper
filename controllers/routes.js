const express = require('express');
const router = express.Router();
const scrapeArticles = require('../utils/scraper');

const db = require('../models');

// Code used to populate the database with some dummy data
//-------------------------------------------------------------
const articlesData = require("../utils/dummyData");
// // When the server starts, create and save a new Article document to the db
// articlesData.articles.forEach( element => {
// 	db.Article.create(element)
// 		.then(function (data) {
// 			// If saved successfully, print the new Library document to the console
// 			console.log(data);
// 		})
// 		.catch(function (err) {
// 			console.log(err.message);
// 		});
// });
//-------------------------------------------------------------


// Create all our routes and set up logic within those routes where required.

//CRUD Methods

router.get("/", function (req, res) {
	
	res.render("index", articlesData);
	console.log(articlesData);
});

router.get("/scrape", function (req, res) {
	res.json(scrapeArticles());
});

// // Create method
router.post("/articles/add", function (req, res) {
	var article = {
		title: req.body.title,
		link: req.body.link,
		summary: req.body.summary
	}
	db.Article.create(article)
		.then(function (data) {
			// If saved successfully, print the new Library document to the console
			console.log(data);
		})
		.catch(function (err) {
			console.log(err.message);
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