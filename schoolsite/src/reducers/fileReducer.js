import { UPLOAD_FILE, VIEW_FILE, RESET_VARIABLE } from '../actions/actionTypes';

const initialState = {
  files: [],
  currentFile: null,
};

const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_FILE:
      return {
        ...state,
        files: [...state.files, action.payload],
      };
    case VIEW_FILE:
      return {
        ...state,
        currentFile: action.payload,
      };
    case RESET_VARIABLE:
        return {
          ...state,
          currentFile: null,
        };
      default:
      return state;
  }
};

export default fileReducer;