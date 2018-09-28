import { SAVE_ARTICLE, SHOW_ARTICLES, SHOW_SAVED, SHOW_UNSAVED, } from "./actionTypes";

let nextTodoId = 0;

export const showArticles = content => ({
  type: SHOW_ARTICLES,
  content
});

export const saveArticle = id => ({
  type: SAVE_ARTICLE,
  id: id
});
