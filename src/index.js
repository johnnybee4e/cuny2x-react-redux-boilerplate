import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { CounterApp } from "./components";
import counter from "./reducers";

const store = createStore(counter);

ReactDOM.render(
  <Provider store={store}>
    {console.log(store)}
    <CounterApp />
  </Provider>,
  document.getElementById("root")
);

