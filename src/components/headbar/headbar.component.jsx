import './headbar.css';
import React from 'react';

export const Headbar = props => {
  return (
    <>
      <div>
        <span className="center-top ">1/10</span>
        <span className="right-top">2322 Eur</span>
        <span className="left-top" onClick={() => props.onPrevClick()}>
          torna alla domanda prima
        </span>
      </div>
    </>
  );
};
