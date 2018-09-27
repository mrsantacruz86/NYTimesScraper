import { SHOW_ARTICLES, SAVE_ARTICLE,  } from '../actions';
import API from '../js/API';


const initialState = {
	articles: [],
	notes:[],
	selectedArticle: {},
	selectedNote: {}
};

const scraperApp = (state = initialState, action) => {
	let scraperApp = {articles:[]};
	switch (action.type) {
		case SHOW_ARTICLES:
			// TODO: Return all articles
			API.getArticles()
				.then(response => 
			return Object.assign({}, state, {articles: response.data
			});
		case SAVE_ARTICLE:
			// TODO: Save selected article
			return articles;
		default:
			return state;
	}
};

export default scraperApp;