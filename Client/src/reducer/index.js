const initialState = {
  allFiles: [],
  oneFile: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_FILES":
      return {
        ...state,
        allFiles: action.payload,
      };
    case "GET_ONE_FILES":
      return {
        ...state,
        oneFile: action.payload,
      };
    case "CLEAR_FILE":
      return {
        ...state,
        oneFile: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
