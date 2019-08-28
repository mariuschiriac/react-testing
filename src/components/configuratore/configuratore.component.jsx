import React from 'react';
import configJSON from '../../assets/config.json';

let Components = {};

Components['Componente1'] = require('../modules/first').default;
Components['Componente2'] = require('../modules/second').default;

export function Configuratore() {
  return (
    <>
      {configJSON.map((value, key) => {
        console.log(value.nome);
        var type = value.nome;
        const Component = Components[type];
        return <Component key={key} />;
      })}
    </>
  );
}
