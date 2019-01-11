import { INCREMENT, DECREMENT } from "../actions";

// initialize default state
const initialState = 0;

// create reducer function

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
