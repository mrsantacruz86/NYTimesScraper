const express = require('express');
const router = express.Router();
const { articlesController, notesController } = require('../controllers')

// Routes
router.get("/", (req, res) => {
	articlesController.get({ saved: false }, data => {
		res.render("index", { articles: data });
	});
});

router.get("/saved", (req, res) => {
	articlesController.get({ saved: true }, data => {
		res.render("index", { articles: data });
	});
});

router.get("/api/scrape", (req, res) => {
	articlesController.add((err, docs) => {
		if (!docs || docs.insertedCount === 0) {
			res.json({
				// Error: err,
				message: "No new articles today. Check back tomorrow!"
			});
		} else {
			res.json({
				message: `${docs.insertedCount} new articles were succesfully added!`
			});
		}
	});
});

router.patch("/api/articles", (req, res) => {
	// console.log(req.body);
	articlesController.update(req.body, (err,data)=>res.json(data));
});

router.delete("/api/articles/:id", (req, res) => {
	var query = {};
	query.id = req.params.id;
	articlesController.delete(query, (err, data) => res.json(data));
});



module.exports = router;