import store from '../store';
import API from '../../js/API';
import axios from 'axios';

import {
  IS_LOADING,
  GET_ARTICLES,
  RECEIVE_ERROR,
  SAVE_ARTICLE,
  // DELETE_ARTICLE,
  // ARTICLE_DELETED,
} from "./types";
import { dispatch } from 'rxjs/internal/observable/pairs';

//Loading data
export const isLoading = () => {
  return {
    type: IS_LOADING
  };
};
//Receive an error
export const receiveError = () => {
  return {
    type: RECEIVE_ERROR
  };
};

// Get Articles from API
export const getArticles = () => dispatch => {
  dispatch(isLoading());
  axios.get("/api/articles")
    .then(res =>
      dispatch({
        type: GET_ARTICLES,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(receiveError());
      console.log(err);
    });
};

// Get Populated articles passing the id
export const getPopulatedArticle = () => {

};

//Save an article;
export const saveArticle = (id) => dispatch => {
  dispatch(isLoading());
  axios.put("/api/articles", { _id: id, saved: true })
    .then(res => {
      dispatch({
        type: SAVE_ARTICLE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};


// Actions to scrape articles and add them to the DB
//--------------------------------------------------
export const scrapeArticles = () => {
  return dispatch => {
    return API.scrapeArticles()
      .then(response => {
        console.log(response);
        dispatch(getArticles());
      })
      .catch(err => console.log(err));
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
          dispatch(getArticles());
        } else {
          console.log("Error deleting article");
        }
      })
      .catch(err => console.log(err));
  };
};