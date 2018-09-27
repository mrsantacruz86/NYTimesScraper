import { SHOW_ARTICLES, SAVE_ARTICLE } from '../actions';

const initialState = {
	articles: []
};

const articles = (state = initialState, action) => {
	let articles = [];
	switch (action.type) {
		case SHOW_ARTICLES:
			// TODO: Return all articles
			// Object.assign(articles, state);
			// articles.selected = [];
			// return posts;
			return articles;
		case SAVE_ARTICLE:
			// TODO: Save selected article
			return articles;
		default:
			return state;
	}
};

export default articles;