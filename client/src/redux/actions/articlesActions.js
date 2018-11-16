import store from '../store';
import API from '../../js/API';

import {
  FETCH_ARTICLES,
  RECEIVE_ARTICLES,
  RECEIVE_ERROR,
  SAVE_ARTICLE,
  ARTICLE_SAVED,
  RECEIVE_ONSAVE_ERROR,
  // DELETE_ARTICLE,
  // ARTICLE_DELETED,
  // RECEIVE_ONDELETE_ERROR
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
    return API.saveArticle({_id: id, saved: true})
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

// Delete Articles
//--------------------------------------------------
// export const deleteArticle = () => ({ type: DELETE_ARTICLE });
// export const articleDeleted = () => ({ type: ARTICLE_DELETED });
// export const receiveOnDeleteError = () => ({ type: RECEIVE_ONDELETE_ERROR });

export const asyncDeleteArticle = (id) => {
  return dispatch => {
    console.log(id);
    // store.dispatch(deleteArticle());
    return API.deleteArticle(id)
      .then(response => {
        if (response.status === 200) {
          // dispatch(articleDeleted());
          dispatch(asyncFetchArticles());
        } else {
          console.log("Error deleting article");
        }
      })
      .catch(err => console.log(err));
  };
};