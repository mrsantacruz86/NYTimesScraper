const express = require('express');
const router = express.Router();
const { articlesController, notesController } = require('../controllers');

// Routes

router.get("/api/scrape", (req, res) => {
	articlesController.add((err, docs) => {
		if (!docs || docs.insertedCount === 0) {
			res.json({
				Error: err,
				message: "No new articles today. Check back tomorrow!"
			});
		} else {
			res.json({
				Error: err,
				message: `${docs.insertedCount} new articles were succesfully added!`
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
	articlesController.get({}, (err,data)=> {
		if(err){
			res.json(err);
		} else {
			res.json(data);
		}
	});
});

router.put("/api/save/:id", (req,res) => {
	let query = {
		saved: true,
		_id: req.params.id
	};
	articlesController.update(query, (docs) => res.json({message: "Article successfuly saved"}) );
});

router.delete("/api/articles/:id", (req, res) => {
	var query = {};
	query.id = req.params.id;
	articlesController.delete(query, (err, data) => res.json(data));
});



module.exports = router;