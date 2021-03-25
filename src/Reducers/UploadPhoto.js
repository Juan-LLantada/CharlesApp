//modifies the state and returns a new state
import {
  SET_LEVEL_UPLOAD,
  SET_PHOTO_UPLOAD,
  ON_UPLOAD_PHOTO,
  GET_MAIN_PHOTO_LIST,
} from '../Actions/actionTypes';

const initialState = {
  level: 1,
  photo: null,
  onUploadPhoto: false,
  photoList: [],
};

const uploadValues = (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case SET_LEVEL_UPLOAD:
      newState.level = action.payload;
      break;
    case SET_PHOTO_UPLOAD:
      newState.photo = action.payload;
      break;
    case ON_UPLOAD_PHOTO:
      newState.onUploadPhoto = action.payload;
      break;
    case GET_MAIN_PHOTO_LIST:
      newState.photoList = action.payload;
      break;
  }
  return newState;
};

export default uploadValues;
