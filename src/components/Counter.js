import React from "react";

const Counter = ({ value, onIncrement, onDecrement, onReset }) => (
  <div>
    {console.log(value)}
    <h1>Value: {value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
    <button onClick={onReset}>clear</button>

  </div>
);

export default Counter;
