import axios from 'axios';
// -------------------------------------------------
// Funcion Library
// -------------------------------------------------
export default {

	// Articles requests
	getArticles: () => axios.get("/api/articles"),
	getOneArticle: (id) => axios.get(`/api/article/${id}`),
	scrapeArticles: () => axios.get("/api/scrape"),
	saveArticle: (article) => axios.put("/api/articles", article),
	deleteArticle: (id) => axios.delete("/api/articles", {_id:id}),

	// Notes Requests
	addNote: (note) => axios.post("/api/notes", note),
	getNotes: (articleId) => axios.get(`/api/notes/${articleId}`),
	updateNote: (note) => axios.put("/api/notes", note),
	deleteNote: (note) => axios.delete("/api/notes", note)
};

