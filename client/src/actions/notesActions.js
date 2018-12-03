// import store from '../store';
import axios from 'axios';
import {
	ADD_NOTE,
	DELETE_NOTE,
	GET_NOTES,
	TOGGLE_NOTES_MODAL
} from "./types";
import { isLoading, receiveError } from './articlesActions';


// Toggle Article Details Modal
export const toggleNotesModal = () => {
	return {
		type: TOGGLE_NOTES_MODAL
	};
};

// Get Populated article with notes
export const getNotes = article => dispatch => {
	dispatch(isLoading());
	axios
		.get(`/api/notes?_articleId=${article._id}`)
		.then(res => {
			dispatch({
				type: GET_NOTES,
				payload: {notesList:res.data, article}
			});
		})
		.catch(err => {
			dispatch(receiveError());
			console.log(err);
		});
};

//Add notes
export const addNote = note => dispatch => {
	axios.post("/api/notes", note)
		.then(res => {
			dispatch({
				type: ADD_NOTE,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch(receiveError());
			console.log(err);
		});
};

// Delete note
export const deleteNote = id => dispatch => {
	axios.delete(`/api/notes/${id}`)
		.then(res => {
			if(res.data.n !== 0 && res.data.ok){
				dispatch({
					type: DELETE_NOTE,
					payload: {_id: id}
				});
			}
		})
		.catch(err => {
			dispatch(receiveError());
			console.log(err);
		});
};
