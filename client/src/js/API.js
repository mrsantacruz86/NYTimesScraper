import axios from 'axios';
// -------------------------------------------------
// Funcion Library
// -------------------------------------------------
export default {
	getArticles: () => axios.get("/api/articles"),
	getSavedArticles: () => axios.get("/api/articles/saved"),
	getUnsavedArticles: () => axios.get("/api/articles/unsaved"),
	scrapeArticles: () => axios.get("/api/scrape"),
	saveArticle: (id) => axios.put(`/api/save/${id}`)
};

