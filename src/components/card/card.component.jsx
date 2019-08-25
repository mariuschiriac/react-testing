import "./card.css";
import React from "react";

export const Card = () => {
  return (
    <>
      <section className="section initial">
        <div className="answer-group row-of-3">
          <div className="col">
            <div
              className="answer js--answer"
              data-answer-id="1"
              data-answer-weight="60"
            >
              <img
                className="answer-image js--answer-image"
                src="answer-1-1.png"
                alt="Ottima qualità"
                title="Ottima qualità"
              ></img>
              <span className="answer-text">Ottima qualità</span>
            </div>
          </div>
          <div className="col">
            <div
              className="answer js--answer"
              data-answer-id="2"
              data-answer-weight="40"
            >
              <img
                className="answer-image js--answer-image"
                src="answer-1-1.png"
                alt="Buon rapporto qualità/prezzo"
              ></img>
              <span className="answer-text">Buon rapporto qualità/prezzo</span>
            </div>
          </div>
          <div className="col">
            <div
              className="answer js--answer"
              data-answer-id="3"
              data-answer-weight="20"
            >
              <img
                className="answer-image js--answer-image"
                src="answer-1-1.png"
                alt="Non mi interessa molto la qualità"
              ></img>
              <span className="answer-text">
                Non mi interessa molto la qualità
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
