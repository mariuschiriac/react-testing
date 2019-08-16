import React from "react";

import "./card.style.css";

export const Card = props => (
  <div className="card-container">
    <img
      alt="Weapons"
      src={
        "https://source.unsplash.com/collection/$" +
        props.weapons.id +
        "/250x250"
      }
    />
    <h1>{props.weapons.name} </h1>
    <h2>
      attacco {props.weapons.damageMin} - {props.weapons.damageMax}
    </h2>
  </div>
);
