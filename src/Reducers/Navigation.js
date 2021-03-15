//modifies the state and returns a new state
import {SET_NAVIGATION} from '../Actions/actionTypes';

const initialState = {
  navRedux: null,
};

const navRedux = (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case SET_NAVIGATION:
      newState.navRedux = action.payload;
      break;
  }
  return newState;
};

export default navRedux;
