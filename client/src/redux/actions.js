import { SAVE_ARTICLE, SHOW_ARTICLES, SHOW_SAVED, SHOW_UNSAVED, } from "./actionTypes";

export const showArticles = data => ({
  type: SHOW_ARTICLES,
  data
});

export const saveArticle = id => ({
  type: SAVE_ARTICLE,
  id
});
