import axios from 'axios';

import {
  IS_LOADING,
  GET_ARTICLES,
  RECEIVE_ERROR,
  SAVE_ARTICLE,
  DELETE_ARTICLE,
  SCRAPE_ARTICLES,
  TOGGLE_NOTES_MODAL
} from "./types";

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
  axios
    .get("/api/articles")
    .then(res => {
      dispatch({
        type: GET_ARTICLES,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(receiveError());
      console.log(err);
    });
};

//Save an article;
export const saveArticle = (id) => dispatch => {
  dispatch(isLoading());
  axios
    .put(`/api/articles/${id}`, { saved: true })
    .then(res => {
      dispatch({
        type: SAVE_ARTICLE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// Actions to scrape articles and add them to the DB
export const scrapeArticles = () => dispatch => {
  dispatch(isLoading());
  axios
    .get("/api/articles/scrape")
    .then(res => {
      // console.log(res);
      if (res.data.err) {
        dispatch(getArticles());
      } else {
        dispatch({
          type: SCRAPE_ARTICLES,
          payload: res.data
        });
      }
    })
    .catch(err => console.log(err));
};

// Delete Articles
export const deleteArticle = (id) => dispatch => {
  console.log(id);
  dispatch(isLoading());
  axios.delete(`/api/articles/${id}`)
    .then(response => {
      dispatch({
        type: DELETE_ARTICLE,
        payload: response.data
      });

    })
    .catch(err => console.log(err));
};