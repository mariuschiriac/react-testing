import React from "react";
import ResponsiveComponent from "../responsive/responsive.component";
import { createStore } from "redux";
import canzoni from "../../reducers/canzoni";
import { Provider } from "react-redux";

const storeCanzoni = createStore(
  canzoni,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);

export const Dashboard = () => {
  return (
    <Provider store={storeCanzoni}>
      <section style={{ margin: "300px 0px" }}>
        <div>
          <ResponsiveComponent />
        </div>
      </section>
    </Provider>
  );
};

storeCanzoni.subscribe(() => {
  console.log("store state", storeCanzoni.getState());
});
