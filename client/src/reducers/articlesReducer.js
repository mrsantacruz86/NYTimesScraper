import { SHOW_ARTICLES, SAVE_ARTICLE, SHOW_SAVED, SHOW_UNSAVED } from '../actions/index';

 const articles = (state = [], action) => {

	switch (action.type) {
		case SHOW_ARTICLES:
			return Object.assign({}, state, { articles: action.data });
		case SHOW_SAVED:
			return state;
		case SHOW_UNSAVED:
			return state;
		case SAVE_ARTICLE:
			return state;
		default:
			return state;
	}
};

export default articles;