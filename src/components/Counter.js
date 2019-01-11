import React from "react";

const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h1>Value: {value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

export default Counter;
