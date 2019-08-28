import React from 'react';
import Components from '../index';

const First = props => {
  console.log(props);
  const Contenuto = props.contenuto.map((value, key) => {
    console.log(value.nome);
    var type = value.nome;
    const Component = Components[type];
    return <Component key={key}></Component>;
  });
  return (
    <>
      <h1>{Contenuto}</h1>
    </>
  );
};

export default First;
