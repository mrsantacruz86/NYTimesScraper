import store from '../store';
import API from '../../js/API';

import { 
  SAVE_ARTICLE,
  FETCH_ARTICLES,
  RECEIVE_ARTICLES,
  RECEIVE_ERROR,
  ARTICLE_SAVED,
  RECEIVE_ONSAVE_ERROR
} from "./actionTypes";

export const fetchArticles = () => ({type: FETCH_ARTICLES});
export const receiveArticles = data => ({type: RECEIVE_ARTICLES, data});
export const receiveError = () => ({type: RECEIVE_ERROR});

export const saveArticle = id => ({type: SAVE_ARTICLE, id });
export const articleSaved = () => ({type: ARTICLE_SAVED});
export const receiveOnSaveError = () => ({type: RECEIVE_ONSAVE_ERROR});

export const thunkFetchArticles = () => {
  store.dispatch(fetchArticles());
  return (dispatch) => {
    return API.getArticles()
    .then(response => {
      if(response.status === 200 && response.data.length > 0){
        dispatch(receiveArticles(response.data));
      }else {
        throw new Error("No articles found. Please scrape some articles now.");
      }
    })
    .catch(err => dispatch(receiveError()));
  };
};

export const asyncSaveArticle = (id) => {
  store.dispatch(saveArticle(id));
  return (dispatch) => {
    return API.saveArticle(id)
  };
};