import { FETCH_ARTICLES, SAVE_ARTICLE } from "../actions/actionTypes";

const initialState = {
  data: [],
  isFetching: false,
  isError: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES: {
      return Object.assign({}, state,{data: action.data});
    }
    default:
      return state;
  }
}
