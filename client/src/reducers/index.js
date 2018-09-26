import { SHOW_ARTICLES, SAVE_ARTICLE} from '../actions';
const articles = (state = [], action) => {
	let articles = [];
	switch (action.type) {
		case SHOW_ARTICLES:
			// TODO: Return all articles
			return articles;
		case SAVE_ARTICLE:
			// TODO: Save selected article
			return articles;
		default:
			return state;
	}
};

export default articles;