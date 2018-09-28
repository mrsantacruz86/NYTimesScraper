import { SHOW_ARTICLES, SAVE_ARTICLE } from "../actionTypes";
import dummyData from '../../js/dummyData';

const initialState = {
  articles: dummyData,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_ARTICLES: {
      return {
        articles: action.content
      };
    }
    default:
      return state;
  }
}

