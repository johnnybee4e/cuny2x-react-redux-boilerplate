/* Namespace Actions aka Action Types */
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";


/* Action Creators */
export const increment = (value = 1) => ({ type: INCREMENT, value });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });
