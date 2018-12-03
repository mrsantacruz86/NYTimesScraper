const express = require('express');
const router = express.Router();
const { notesController } = require('../../controllers');

// Notes Routes

// @route	api/notes
router
	.route("/")
	.get(notesController.get)
	.post(notesController.add);
	
// @route	api/notes/id
router
	.route("/:id")
	.put(notesController.update)
	.delete(notesController.delete);

module.exports = router;
