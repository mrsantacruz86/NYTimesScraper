import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import noteReducer from './notesReducer';

export default combineReducers ({
  articlesReducer,
  noteReducer
});