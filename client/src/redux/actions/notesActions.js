// import store from '../store';
import axios from 'axios';
import {
ADD_NOTE,
ADDING_NOTE,
ADDING_NOTE_ERROR,
} from "./types";
//Actions to fetch notes
//-------------------------

export const saveNote = (note) => {
	return (dispatch) => {
		axios.post("/api/notes", note)
			.then(response => {
				console.log("Saved");
			})
			.catch(err => console.log(err));
	};
};