import "./card.css";
import React from "react";
import { connect } from "react-redux";
import { nextPasso, prevPasso } from "../../actions";
import { Headbar } from "../headbar/headbar.component";

const Passo = ({ domanda, dispatch, index, totaleDomande }) => {
  function handleClick(value, titolo) {
    console.log(value);
    dispatch(nextPasso(value, titolo));
  }

  return (
    <>
      <Headbar
        totale={totaleDomande}
        indice={++index}
        onPrevClick={() => dispatch(prevPasso())}
      />
      <section className="section question">
        <h2>{domanda.titolo}</h2>
        <div className={"answer-group row-of-" + domanda.opzioni.length}>
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
      </section>
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
