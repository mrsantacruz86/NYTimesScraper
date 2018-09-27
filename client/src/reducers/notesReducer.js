

const notes = (state = [], action) => {

  switch (action.type) {
    case "SHOW_NOTES":
      return Object.assign({}, state, { notes: action.data });
    default:
      return state;
  }
};
export default notes;