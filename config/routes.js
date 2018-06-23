const express = require('express');
const router = express.Router();
const { articlesController, notesController } = require('../controllers')

// Routes
router.get("/", function (req, res) {
	articlesController.get({ saved: false }, data => {
		res.render("index", { articles: data });
	});
});

router.get("/saved", (req, res) => {

});

//Scrape the articles from Miami Herald
router.get("/api/scrape", function (req, res) {
	articlesController.fetch((err, docs) => {
		if (!docs || docs.insertedCount === 0) {
			res.json({
				Error: err,
				message: "No new articles today. Check back tomorrow!",
				docs: docs
			});
		} else {
		}
	});

});

//CRUD Methods

// Save articles

module.exports = router;