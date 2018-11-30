/* eslint-disable no-case-declarations */
import {
  IS_LOADING,
  GET_ARTICLES,
  RECEIVE_ERROR,
  SAVE_ARTICLE,
  DELETE_ARTICLE,
  SCRAPE_ARTICLES,
  GET_ARTICLE_DETAILS,
  TOGGLE_ARTICLE_DETAILS
} from "../actions/types";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errorOnSave: false,
  selectedArticle: {},
  articleDetailModal: false
};

export default (state = initialState, action) => {
  switch (action.type) {

    case IS_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case TOGGLE_ARTICLE_DETAILS:
      return {
        ...state,
        articleDetailModal: !state.articleDetailModal,
        isLoading: false
      };

    case RECEIVE_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false
      };

    case SCRAPE_ARTICLES:
      return {
        ...state,
        data: [...action.payload, ...state.data],
        isLoading: false
      };

    case GET_ARTICLES:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false
      };

    case GET_ARTICLE_DETAILS:
      return {
        ...state,
        selectedArticle: action.payload,
        isLoading: false,
        isError: false
      };

    case SAVE_ARTICLE:
      const updated = state.data.map(article => {
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
      const filtered = state.data.filter(
        article => article._id !== action.payload._id
      );
      return {
        ...state,
        data: filtered,
        isLoading: false
      };

    default:
      return state;
  }
}
