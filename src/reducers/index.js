import { INCREMENT, DECREMENT, RESET } from "../actions";

// initialize default state
const initialState = {
  value: 0
};

// create reducer function

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, state.value += action.value);
    case DECREMENT:
      return Object.assign({}, state, state.value--);
    case RESET:
      return Object.assign({}, state, (state.value = 0));
    default:
      return state;
  }
};
