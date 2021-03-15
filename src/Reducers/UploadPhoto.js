//modifies the state and returns a new state
import {SET_LEVEL_UPLOAD,SET_PHOTO_UPLOAD} from '../Actions/actionTypes';

const initialState = {
  level: 1, 
  photo: null
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
  }
  return newState;
};

export default uploadValues;
