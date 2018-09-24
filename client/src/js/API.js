import axios from 'axios';
// -------------------------------------------------
// Funcion Library
// -------------------------------------------------
export default {
	getArticles: () => 	axios.get("/api/articles"),
	scrapeArticles: () => axios.get("/api/scrape"),
	saveArticle: (id) => axios.get(`/api/save/${id}`)
};

