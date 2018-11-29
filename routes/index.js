const  path = require('path');
const router = require('express').Router();
const { articlesController, notesController } = require('../controllers');
const apiRoutes = require('./api');
// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Articles Routes
router.get("/api/scrape", (req, res) => {
	articlesController.add(data => {
		res.json(data);
	});
});

router.get("/api/articles", (req, res) => {
	articlesController.get({}, data => {
		res.json(data);
	});
});

router.get("/api/articles/:id", (req, res) => {
	articlesController.populated(
		req.params.id,
		data => {
			data ? res.json(data) : res.json({ Error: "Article not found" });
		});
});

router.put("/api/articles", (req, res) => {
	articlesController.update(
		req.body,
		data => res.json(data));
});

router.delete("/api/articles", (req, res) => {
	articlesController.delete(req.body, data => res.json(data));
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
	notesController.update(note, data => res.json(data));
});

router.delete("/api/notes", (req, res) => {
	notesController.delete(req.body, data => res.json(data));
});

module.exports = router;
