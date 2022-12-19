import axios from "axios";

const URL = "http://localhost:3001/";

export function getAllFiles() {
  return async (dispatch) => {
    try {
      const files = (await axios.get(`${URL}files/list`)).data;
      dispatch({ type: "GET_ALL_FILES", payload: files.files });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getOneFiles(name) {
  return async (dispatch) => {
    try {
      const file = (await axios.get(`${URL}files/data?fileName=${name}`)).data;
      dispatch({ type: "GET_ONE_FILES", payload: file[0] });
    } catch (error) {
      console.log(error.message);
    }
  };
}


export function clearFile() {
  return async (dispatch) => {
      dispatch({ type: "CLEAR_FILE", payload: {} });
  };
}
