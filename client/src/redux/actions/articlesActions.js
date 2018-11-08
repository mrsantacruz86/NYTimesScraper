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
//Actions to fetch articles
//-------------------------
export const fetchArticles = () => ({ type: FETCH_ARTICLES });
export const receiveArticles = data => ({ type: RECEIVE_ARTICLES, data });
export const receiveError = () => ({ type: RECEIVE_ERROR });


export const asyncFetchArticles = () => {
  store.dispatch(fetchArticles());
  return (dispatch) => {
    API.getArticles()
      .then(response => {
        if (response.status === 200 && response.data.length > 0) {
          dispatch(receiveArticles(response.data));
        } else {
          throw new Error("No articles found. Please scrape some articles now.");
        }
      })
      .catch(err => dispatch(receiveError()));
  };
};

//Actions to save an article
//---------------------------
export const saveArticle = () => ({ type: SAVE_ARTICLE });
export const articleSaved = (message) => ({ type: ARTICLE_SAVED, message: message });
export const receiveOnSaveError = () => ({ type: RECEIVE_ONSAVE_ERROR });

export const asyncSaveArticle = (id) => {
  store.dispatch(saveArticle());
  return dispatch => {
    API.saveArticle(id)
    .then( response => {
      if (response.status === 200) {
        dispatch(articleSaved(response.data.message));
      } else {
        dispatch(receiveOnSaveError());
      }
    })
    .catch(err => dispatch(receiveOnSaveError()));
  };
};