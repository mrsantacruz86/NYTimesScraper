/* eslint-disable no-case-declarations */
import {
  ADD_NOTE,
  DELETE_NOTE,
  GET_NOTES,
  TOGGLE_NOTES_MODAL
} from "../actions/types";

const initialState = {
  selectedArticle: {},
  notesList: [],
  modal: false,
  isLoading: false,
  isError: false
};

export default (state = initialState, action) => {
  switch (action.type) {

    case TOGGLE_NOTES_MODAL:
      return {
        ...state,
        modal: !state.modal,
        isLoading: false
      };

    case GET_NOTES:
      return {
        ...state,
        notesList: action.payload.notesList,
        selectedArticle: action.payload.article,
        isLoading: false,
        isError: false
      };

    case ADD_NOTE:
      return {
        ...state,
        notesList: [action.payload, ...state.notesList]
      };

    case DELETE_NOTE:
      return {
        ...state,
        notesList: state.notesList.filter(
          note => note._id !== action.payload._id)
      };

    default:
      return state;
  }
};
