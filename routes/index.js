const express = require('express');
const router = express.Router();
const { articlesController, notesController } = require('../controllers');

// Articles Routes

router.get("/api/scrape", (req, res) => {
	articlesController.add((data) => {
		if (!data || data.name == "BulkWriteError") {
			res.json({
				message: "No new articles today. Check back tomorrow!",
			});
		} else {
			res.json({
				message: `${data.length} new articles were succesfully added!`
			});
		}
	});
});

// const  path = require('path');

// If no API routes are hit, send the React app
// router.use(function (req, res) {
// 	res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });


router.get("/api/articles", (req, res) => {
	articlesController.get({}, data => {
		res.json(data);
	});
});

router.get("/api/populatedarticle/:id", (req, res) => {
	articlesController.populated(
		req.params.id,
		data => {
			data ? res.json(data) : res.json({ Error: "Article not found" });
		});
});

router.put("/api/save/:id", (req, res) => {
	articlesController.update(
		req.params.id,
		{ saved: true },
		data => res.json(data));
});

router.delete("/api/articles", (req, res) => {
	articlesController.delete(req.body,  data => res.json(data));
});

// Notes Routes

router.get("/api/notes/:_articleId", (req, res) => {
	let query = {
		_articleId: req.params._articleId
	};
	console.log(query);
	notesController.get(query, data => res.json(data));
});

router.post("/api/notes", (req, res) => {
	let note = req.body;
	notesController.create(note, data => res.json(data));
});

router.put("/api/notes", (req, res) => {
	let note = req.body;
	articlesController.addNote(note._articleId, note._id, data => res.json(data));
});

router.delete("/api/notes", (req, res) => {
	let note = req.body;
	notesController.create(note, data => res.json(data));
});

module.exports = router;
