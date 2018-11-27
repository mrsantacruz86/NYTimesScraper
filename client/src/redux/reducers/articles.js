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
  data: [],
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
      return {
        ...state,
        isLoading: true
      };
    case GET_ARTICLES:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false
      };
    case SAVE_ARTICLE:
      const updated = state.data.map(article => {
        console.log(article);
        console.log(action.payload);
        if (article._id === action.payload._id) {
          return { ...article, saved: true };
        }
        return article;
      });
      return updated;

    case DELETE_ARTICLE:
      const deleted = state.data.filter(article => article._id !== action.payload._id);
      return {
        ...state,
        data: deleted,
        isLoading: false
      };

    default:
      return state;
  }
}
