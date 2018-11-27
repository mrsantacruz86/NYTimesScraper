/* eslint-disable no-case-declarations */
import {
  IS_LOADING,
  GET_ARTICLES,
  RECEIVE_ERROR,
  SAVE_ARTICLE,
  DELETE_ARTICLE,
  SCRAPE_ARTICLES,
} from "../actions/types";
import Article from "../../Components/Article";

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
    const newData = [...action.payload, ...state.data];
      return {
        ...state,
        data: newData,
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
      const deleted = state.data.filter(article => {
        if(article._id !== action.payload._id){
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
