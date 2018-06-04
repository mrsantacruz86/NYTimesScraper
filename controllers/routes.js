const express = require('express');
const router = express.Router();
const scrapeArticles = require('./scraper');

const db = require('../models');
var testData = scrapeArticles();
// var testData = {
// 	articles: [
// 	{
// 		title: "This is a test article # 1",
// 		link: "www.google.com"
// 	},
// 	{
// 		title: "This is a test article # 2",
// 		link: "www.instagram.com"
// 	},
// 	{
// 		title: "This is a test article # 3",
// 		link: "www.github.com"
// 	}]
// };
// When the server starts, create and save a new Article document to the db
testData.forEach( element => {
	db.Article.create(element)
		.then(function (data) {
			// If saved successfully, print the new Library document to the console
			console.log(data);
		})
		.catch(function (err) {
			console.log(err.message);
		});
});

// Create all our routes and set up logic within those routes where required.

//CRUD Methods

router.get("/", function (req, res) {
	db.Article.find({})
	.then(data => {
		res.render("index", data);
		console.log(data);
	})
	.catch(function (err) {
		console.log(err.message);
	});
});

// Create method
router.post("/api/articles", function (req, res) {
	burger.create(["burger_name"], [req.body.name], function (result) {
		// Send back the ID of the new burger
		console.log(req.body);
		res.json({ id: result.insertId });
	});
});

// Uptade some feature
router.put("/api/burgers/:id", function (req, res) {
	var condition = { "id": req.params.id };
	// console.log("condition", condition);
	burger.update({
		devoured: req.body.devoured
	}, condition, function (result) {
		if (result.changedRows == 0) {
			// If no rows were changed, then the ID must not exist, so 404
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

// Delete record
router.delete("/api/burgers/:id", function (req, res) {
	var condition = { "id": req.params.id };

	burger.delete(condition, function (result) {
		if (result.affectedRows == 0) {
			// If no rows were changed, then the ID must not exist, so 404
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

// Export routes for server.js to use.
module.exports = router;