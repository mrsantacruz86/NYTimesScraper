const router = require('express').Router();
const articlesController = require("../../controllers/articlesController");

// Articles Routes

// @route	api/articles/scrape
router
	.route("/scrape")
	.get(articlesController.add);
	
// @route	api/articles
router
	.route("/")
	.get(articlesController.getAll);

// @route	api/articles/id
router
	.route("/:id")
	.get(articlesController.populated)
	.put(articlesController.update)
	.delete(articlesController.delete);

module.exports = router;
