import './configuratore.css';
import './card.css';
import React from 'react';
import { connect } from 'react-redux';
import { nextPasso, prevPasso } from '../../actions';
import { Headbar } from '../headbar/headbar.component';

const Passo = ({ domanda, dispatch }) => {
  function handleClick(value, titolo) {
    console.log(value);
    dispatch(nextPasso(value, titolo));
  }

  return (
    <>
      <Headbar onPrevClick={() => dispatch(prevPasso())} />
      <h2 className="question-title">{domanda.titolo}</h2>
      <div className={'answer-group row-of-' + domanda.opzioni.length}>
        {domanda.opzioni.map((value, key) => {
          return (
            <Card
              key={key}
              value={value}
              onItemClick={() => handleClick(value, domanda.titolo)}
            />
          );
        })}
      </div>
    </>
  );
};

const Card = props => {
  return (
    <div className="col">
      <div className="answer js--answer" onClick={() => props.onItemClick()}>
        <img
          className="answer-image js--answer-image"
          src="answer-1-1.png"
          alt={props.value}
        />
        <span className="answer-text">{props.value}</span>
      </div>
    </div>
  );
};

export default connect()(Passo);
