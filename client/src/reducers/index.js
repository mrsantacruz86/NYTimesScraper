import { combineReducers } from "redux";
import articles from "./articles";
import notes from "./notes";

export default combineReducers({ 
  articles,
  notes
});
