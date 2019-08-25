import './configuratore.css';
import React from 'react';
import configJson from '../../assets/config.json';
import Passo from './passo.component';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { reduceConfig } from '../../reducers/config';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeConfig = createStore(reduceConfig, composeEnhancers());

export const Configuratore = () => {
  return (
    <Provider store={storeConfig}>
      <ul>
        <Passo opzioni={configJson[storeConfig.getState()]} />
      </ul>
    </Provider>
  );
};

storeConfig.subscribe(() => {
  console.log('store state', storeConfig.getState());
});
