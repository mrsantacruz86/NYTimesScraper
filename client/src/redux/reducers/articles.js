import { SHOW_ARTICLES, SAVE_ARTICLE } from "../actionTypes";
import dummyData from '../../js/dummyData';
import API from '../../js/API';

const initialState = {
  data: dummyData,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_ARTICLES: {
      return {data: action.data};
    }
    default:
      return state;
  }
}
