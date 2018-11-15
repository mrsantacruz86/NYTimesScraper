import {
  VIEW_SAVED,
  VIEW_UNSAVED
} from "./actionTypes";

//Actions to change the visibility filter
//---------------------------------------
export const viewSaved = () => ({ type: VIEW_SAVED });
export const viewUnsaved = data => ({ type: VIEW_UNSAVED });
