import './configuratore.css';
import React, { useState } from 'react';
import configJson from '../../assets/config.json';
import MioPasso from './passo.component';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { reduceConfig } from '../../reducers/config';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeConfig = createStore(reduceConfig, composeEnhancers());

export function Configuratore() {
  const [index, setIndex] = useState(0);

  storeConfig.subscribe(() => {
    setIndex(storeConfig.getState());
  });

  if (index === configJson.length) {
    return <Provider store={storeConfig}>Fine</Provider>;
  } else {
    return (
      <Provider store={storeConfig}>
        <MioPasso opzioni={configJson[index]} />
      </Provider>
    );
  }
}
