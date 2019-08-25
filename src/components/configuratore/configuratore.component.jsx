import "./card.css";
import React, { useState } from "react";
import configJson from "../../assets/config.json";
import MioPasso from "./passo.component";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import { reduceConfig } from "../../reducers/config";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeConfig = createStore(reduceConfig, composeEnhancers());

export function Configuratore() {
  const [index, setIndex] = useState(0);

  storeConfig.subscribe(() => {
    setIndex(storeConfig.getState().length);
  });

  if (index === configJson.length) {
    //TODO da cambiare con la pagina finale figlia
    return <Provider store={storeConfig}>{window.location.reload()}</Provider>;
  } else {
    return (
      <Provider store={storeConfig}>
        <MioPasso
          totaleDomande={configJson.length}
          index={index}
          domanda={configJson[index]}
        />
      </Provider>
    );
  }
}
