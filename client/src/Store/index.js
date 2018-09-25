import { createStore } from 'redux';
import API from '../js/API';

const initialState = {
  articles: loadArticles()
};

const loadArticles = () => {
  let list = [];
  API.getArticles()
    .then(res => list = res.data)
    .catch(err => console.log(err));

  return list;
};

const reducer = (state = initialState, action) => {
  console.log("reducer", action);

  switch (action.type) {
    case "INCREMENT":
      return Object.assign({}, state, { count: state.count + 1 });
    case "DECREMENT":
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state;
  }
  // return state;
};

const store = createStore(reducer);
export default store;