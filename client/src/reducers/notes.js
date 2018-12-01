/* eslint-disable no-case-declarations */
import {
  IS_LOADING,
  RECEIVE_ERROR,
  ADD_NOTE,
  DELETE_NOTE,
  GET_NOTES_BY_ARTICLE,
  TOGGLE_NOTES_MODAL
} from "../actions/types";

const initialState = {
  selectedArticle: {},
  modal: false
};

export default (state = initialState, action) => {
  switch (action.type) {

    case TOGGLE_NOTES_MODAL:
      return {
        ...state,
        modal: !state.modal,
        isLoading: false
      };

    case GET_NOTES_BY_ARTICLE:
      return {
        ...state,
        selectedArticle: action.payload,
        isLoading: false,
        isError: false
      };

    case ADD_NOTE:
      const n = [action.payload, ...state.selectedArticle.notes];
        return {
          ...state,
          selectedArticle:{...state.selectedArticle, notes:n}
      };

    case DELETE_NOTE:
      const filtered = state.selectedArticle.notes.filter(
        note => note._id !== action.payload._id
      );
      return {
        ...state,
        selectedArticle:{...state.selectedArticle, notes: filtered}
      };

    default:
      return state;
  }
}
