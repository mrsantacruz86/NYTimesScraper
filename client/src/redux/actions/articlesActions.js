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
export const articleSaved = () => ({ type: ARTICLE_SAVED });
export const receiveOnSaveError = () => ({ type: RECEIVE_ONSAVE_ERROR });

export const asyncSaveArticle = (id) => {
  return dispatch => {
    store.dispatch(saveArticle());
    return API.saveArticle(id)
    .then( response => {
      if (response.status === 200) {
        dispatch(articleSaved());
        dispatch(asyncFetchArticles());
      } else {
        dispatch(receiveOnSaveError());
      }
    })
    .catch(err => console.log(err));
  };
};

// Actions to scrape articles and add them to the DB
//--------------------------------------------------
export const scrapeArticles = () => {
  return dispatch => {
    return API.scrapeArticles()
    .then(response => {
      console.log(response);
      dispatch(asyncFetchArticles());
    })
    .catch( err => console.log(err));
  };
};