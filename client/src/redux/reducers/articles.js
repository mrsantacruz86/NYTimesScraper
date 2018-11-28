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
  // unsavedArticles: [],
  // savedArticles: [],
  data: [],
  isLoading: false,
  isError: false,
  errorOnSave: false,
  selectedArticle: {}
};

export default (state = initialState, action) => {
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
      const newData = [...action.payload, ...state.data];
      return {
        ...state,
        unsavedArticles: newData,
        isLoading: false
      };

    case GET_ARTICLES:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false
      };

    case SAVE_ARTICLE:
      const updated = state.unsavedArticles.map(article => {
        if (article._id === action.payload._id) {
          return { ...article, saved: true };
        }
        return article;
      });
      return {
        ...state,
        data: updated,
        isLoading: false
      };

    case DELETE_ARTICLE:
      const deleted = state.data.filter(
        article => article._id !== action.payload._id
      );
      return {
        ...state,
        data: deleted,
        isLoading: false
      };

    default:
      return state;
  }
}
