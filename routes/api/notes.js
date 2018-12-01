const express = require('express');
const router = express.Router();
const { articlesController, notesController } = require('../../controllers');

// Notes Routes

// @route	api/notes
router
	.route("/")
	.get(notesController.get)
	.post(notesController.add);
	
// @route	api/notes/id
router
	.route("/:id")
	.put(articlesController.update)
	.delete(articlesController.delete);

module.exports = router;
