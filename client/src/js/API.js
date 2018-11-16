import axios from 'axios';
// -------------------------------------------------
// Funcion Library
// -------------------------------------------------
export default {

	// Articles requests
	getArticles: () => axios.get("/api/articles"),
	getOneArticle: (id) => axios.get(`/api/article/${id}`),
	scrapeArticles: () => axios.get("/api/scrape"),
	saveArticle: (id) => axios.put(`/api/save/${id}`),
	deleteArticle: () => axios.delete(`/api/articles`),

	// Notes Requests
	addNote: () => axios.post("/api/notes"),
	getNotes: (articleId) => axios.get(`/api/notes/${articleId}`),
	updateNote: () => axios.put("/api/notes"),
	deleteNote: () => axios.delete("/api/notes")
};

