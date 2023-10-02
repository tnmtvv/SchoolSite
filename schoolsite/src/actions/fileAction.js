import { UPLOAD_FILE, VIEW_FILE,RESET_VARIABLE } from './actionTypes';

export const uploadFile = (file) => (dispatch) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    dispatch({
      type: UPLOAD_FILE,
      payload: {
        name: file.name,
        data: e.target.result,
      },
    });
  };

  reader.readAsArrayBuffer(file);
};

export const viewFile = (file) => (dispatch) => {
  dispatch({
    type: VIEW_FILE,
    payload: {
      name: file.name,
      data: file.data,
    },
  });
};
export const resetVariable = () => ({
  type: RESET_VARIABLE,
});