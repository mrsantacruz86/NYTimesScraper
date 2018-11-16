import {
  FETCH_ARTICLES,
  RECEIVE_ARTICLES,
  RECEIVE_ERROR,
  SAVE_ARTICLE,
  ARTICLE_SAVED,
  RECEIVE_ONSAVE_ERROR,
  VIEW_SAVED,
  VIEW_UNSAVED,
  // DELETE_ARTICLE,
  // ARTICLE_DELETED,
  // RECEIVE_ONDELETE_ERROR
} from "../actions/actionTypes";

const initialState = {
  data: [],
  isFetching: false,
  isError: false,
  savingArticle: false,
  errorOnSave: false,
  filterSaved: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return Object.assign({}, state, {
        isFetching: true,
        data: [],
        isError: false
      });
    case RECEIVE_ARTICLES:
      return Object.assign({}, state, {
        data: action.data,
        isFetching: false,
        isError: false
      });
    case RECEIVE_ERROR:
      return Object.assign({}, state, {
        isError: true,
        isFetching: false
      });
    case SAVE_ARTICLE:
      return Object.assign({}, state, {
        savingArticle: true,
      });
    case ARTICLE_SAVED:
      return Object.assign({}, state, {
        savingArticle: false,
        errorOnSave: false
      });
    case RECEIVE_ONSAVE_ERROR:
      return Object.assign({}, state, {
        savingArticle: false,
        errorOnSave: true
      });
    case VIEW_SAVED:
      return Object.assign({}, state, {
        filterSaved: true
      });
    case VIEW_UNSAVED:
      return Object.assign({}, state, {
        filterSaved: false
      });
    default:
      return state;
  }
}
