import {
  FETCH_ARTICLES,
  RECEIVE_ARTICLES,
  RECEIVE_ERROR,
  SAVE_ARTICLE
} from "../actions/actionTypes";

const initialState = {
  data: [],
  isFetching: false,
  isError: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
    console.log("fetching articles");
      return Object.assign({}, state, {
        isFetching: true,
        data: [],
        isError: false
      });
    case RECEIVE_ARTICLES:
    console.log("Receiving articles");
      return Object.assign({}, state, {
        data: action.data,
        isFetching: false,
        isError: false
      });
    case RECEIVE_ERROR:
    console.log("returning error");
      return Object.assign({}, state, {
        isError: true,
        isFetching: false
      });
    default:
      return state;
  }
}
