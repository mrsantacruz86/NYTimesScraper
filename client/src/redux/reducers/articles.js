/* eslint-disable no-case-declarations */
import {
  IS_LOADING,
  GET_ARTICLES,
  RECEIVE_ERROR,
  SAVE_ARTICLE,
  DELETE_ARTICLE,
  SCRAPE_ARTICLES,
} from "../actions/types";

const initialState = {
  unsavedArticles: [],
  savedArticles: [],
  isLoading: false,
  isError: false,
  errorOnSave: false,
  selectedArticle: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case RECEIVE_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false
      };
    case SCRAPE_ARTICLES:
      const newData = [...action.payload, ...state.unsavedArticles];
      return {
        ...state,
        unsavedArticles: newData,
        isLoading: false
      };
    case GET_ARTICLES:
      const saved = action.payload.filter(item => item.saved);
      const unsaved = action.payload.filter(item => !item.saved);
      return {
        ...state,
        unsavedArticles: unsaved,
        savedArticles: saved,
        isLoading: false,
        isError: false
      };
    case SAVE_ARTICLE:
      let updatedSavedList = [];
      const updated = state.unsavedArticles.filter(article => {
        if (article._id === action.payload._id) {
          const temp = { ...article, saved: true };
          updatedSavedList = [temp, ...state.savedArticles];
        }
        return article;
      });
      return {
        ...state,
        unsavedArticles: updated,
        savedArticles: updatedSavedList,
        isLoading: false
      };

    case DELETE_ARTICLE:
      const deleted = state.data.filter(article => {
        if (article._id !== action.payload._id) {
          return article;
        }
      });
      return {
        ...state,
        data: deleted,
        isLoading: false
      };

    default:
      return state;
  }
}
