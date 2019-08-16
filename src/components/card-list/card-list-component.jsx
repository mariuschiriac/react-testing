import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card-component";

export const CardList = props => (
  <div className="card-list">
    {props.weapons.map(weapons => (
      <Card key={weapons.id} weapons={weapons} />
    ))}
  </div>
);
