import {
  IS_LOADING,
  GET_ARTICLES,
  RECEIVE_ERROR,
  SAVE_ARTICLE,
  ARTICLE_SAVED,
  RECEIVE_ONSAVE_ERROR
  // DELETE_ARTICLE,
  // ARTICLE_DELETED,
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
    case GET_ARTICLES:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false
      };
    case SAVE_ARTICLE:
      return {
        ...state,
        data.map()
        isLoading: false,
      });
    default:
      return state;
  }
}
