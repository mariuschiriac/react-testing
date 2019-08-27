import './card.css';
import React from 'react';
import configJson from '../../assets/config.json';
import MioPasso from './passo.component';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { reduceConfig } from '../../reducers/config';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let storeConfig = createStore(reduceConfig, composeEnhancers());

export const Configuratore = props => {
  storeConfig.subscribe(() => {
    props.setIndex(storeConfig.getState().length);
  });

  if (props.index === configJson.length) {
    storeConfig = createStore(reduceConfig, composeEnhancers());
    props.end();
    return <></>;
  } else {
    return (
      <Provider store={storeConfig}>
        <MioPasso
          store={storeConfig}
          totaleDomande={configJson.length}
          index={props.index}
          domanda={configJson[props.index]}
        />
      </Provider>
    );
  }
};
