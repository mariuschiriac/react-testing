import "./card.css";
import React from "react";
import { Headbar } from "../headbar/headbar.component.jsx";

export const Card = () => {
  return (
    <>
      <div>
        <Headbar></Headbar>
        <section className="section question">
          <h2 className="question-title">
            Che livello di qualità stai cercando?
          </h2>

          <div className="answer-group row-of-3">
            <div className="col">
              <div className="answer js--answer">
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
              <div className="answer js--answer">
                <img
                  className="answer-image js--answer-image"
                  src="answer-1-1.png"
                  alt="Buon rapporto qualità/prezzo"
                ></img>
                <span className="answer-text">
                  Buon rapporto qualità/prezzo
                </span>
              </div>
            </div>
            <div className="col">
              <div className="answer js--answer">
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
      </div>
    </>
  );
};
