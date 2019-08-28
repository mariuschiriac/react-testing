import React from 'react';
import configJSON from '../../assets/config.json';
import Components from '../index';

export function Configuratore() {
  return (
    <>
      {configJSON.map((value, key) => {
        console.log(value.nome);
        var type = value.nome;
        const Component = Components[type];
        if (value.contenuto) {
          return <Component key={key} contenuto={value.contenuto} />;
        }
        return <Component key={key} />;
      })}
    </>
  );
}
