import React from "react";
import ResponsiveComponent from "../responsive/responsive.component";
import { createStore, compose } from "redux";
import canzoni from "../../reducers/canzoni";
import { Provider } from "react-redux";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true,
    traceLimit: 25
  }) || compose;
const storeCanzoni = createStore(canzoni, composeEnhancers());

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
