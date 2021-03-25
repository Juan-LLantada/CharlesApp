//modifies the state and returns a new state
import {SET_USER} from '../Actions/actionTypes';

const initialState = {
  email: '',
  name: '',
  id: '',
};

const userLoginValues = (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case SET_USER:
      newState.email = action.payload.email;
      newState.name = action.payload.name;
      newState.id = action.payload.id;
      break;
  }
  return newState;
};

export default userLoginValues;
