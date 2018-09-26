// Best practice dictates specifying constants
// for the different types of actions in an application
export const SHOW_ARTICLES = 'SHOW_UNSAVED';
export const SAVE_ARTICLE = 'SAVE';

// This is an action creator
export const showArticles = (query) => {
	// The returned object is an action
	return {
		// 'type' is a required field for an action, 
		// specifying the type of action being performed
		type: SHOW_ARTICLES,
		query
	};
};
export const saveArticle = (query) => {
	return {
		type: SAVE_ARTICLE,
		query
	};
};