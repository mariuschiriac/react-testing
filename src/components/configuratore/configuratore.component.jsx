import './configuratore.css';
import React from 'react';
import configJSON from '../../assets/config.json';
import { LazyLoadModule } from './lazy_load.component';

export function Configuratore() {
  return (
    <>
      {configJSON.map((value, key) => {
        const path = value.path;
        console.log(path);
        return (
          <LazyLoadModule
            key={key}
            resolve={() => import('../modules/first')}
          ></LazyLoadModule>
        );
      })}
    </>
  );
}
