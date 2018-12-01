// import store from '../store';
import axios from 'axios';
import {
	ADD_NOTE,
	DELETE_NOTE,
	GET_NOTES_BY_ARTICLE,
	TOGGLE_NOTES_MODAL
} from "./types";
import {isLoading,receiveError} from './articlesActions';


// Toggle Article Details Modal
export const toggleNotesModal = () => {
	return {
		type: TOGGLE_NOTES_MODAL
  };
};

// Get Populated article with notes
export const getNotesByArticle = (id) => dispatch => {
	dispatch(isLoading());
	axios
		.get(`/api/articles/${id}`)
		.then(res => {
			dispatch({
				type: GET_NOTES_BY_ARTICLE,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch(receiveError());
			console.log(err);
		});
};

//Add notes
export const addNote = (note) => dispatch => {
	axios.post("/api/notes", note)
		.then(res => {
			console.log("Saved");
			dispatch({
				type: ADD_NOTE,
				payload: res.data
			});
		})
		.catch(err => console.log(err));
};
