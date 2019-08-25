import React from "react";

import "./bottone.css";

export const Bottonestart = () => (
  <div>
    <img className="intro-image" src="intro.png" alt=""></img>
    <h1 className="title">
      Quanto costa sviluppare la mia <strong>app</strong>?
    </h1>
    <p className="subtitle">
      Calcola rapidamente il costo per creare la tua app, rispondendo a queste
      semplici domande.
    </p>
    <button className="button text-uppercase js--start">Calcolare</button>
  </div>
);

export default Bottonestart;
