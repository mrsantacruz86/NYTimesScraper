// Best practice dictates specifying constants
// for the different types of actions in an application
export const SHOW_ARTICLES = 'SHOW_ARTICLES';
export const SHOW_SAVED = 'SHOW_SAVED';
export const SHOW_UNSAVED = 'SHOW_UNSAVED';
export const SAVE_ARTICLE = 'SAVE';

// This is an action creator
export const showArticles = (data) => {
	// The returned object is an action
	return {
		// 'type' is a required field for an action, 
		// specifying the type of action being performed
		type: SHOW_ARTICLES,
		data: data
	};
};
export const showSaved = () => {
	return {
		type: SHOW_SAVED
	};
};
export const showUnsaved = () => {
	return {
		type: SHOW_UNSAVED
	};
};
export const saveArticle = (query) => {
	return {
		type: SAVE_ARTICLE,
		query
	};
};