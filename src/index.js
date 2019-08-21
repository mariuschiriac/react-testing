import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";

ReactDOM.render(<App />, document.getElementById("root"));

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      state = state + action.payload;
      break;
    case "SUBTRACT":
      state = state - action.payload;
      break;
    default:
      break;
  }
  return state;
};
const store = createStore(
  reducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);

store.subscribe(() => {
  console.log("store state", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 10
});

store.dispatch({
  type: "SUBTRACT",
  payload: 4
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
