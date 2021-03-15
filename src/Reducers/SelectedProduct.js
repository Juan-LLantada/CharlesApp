//modifies the state and returns a new state
import {SET_SELECTED_PRODUCT} from '../Actions/actionTypes';

const initialState = {
  selected: {},
};

const selectedProduct = (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case SET_SELECTED_PRODUCT:
      newState.selected = action.payload;
      break;
  }
  return newState;
};

export default selectedProduct;
