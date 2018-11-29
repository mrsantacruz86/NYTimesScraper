const router = require('express').Router();
const articleRoutes = require('./articles');
const notesRoutes = require('./notes');

router.use("/articles", articleRoutes);
router.use("/notes", notesRoutes);

module.exports = router;