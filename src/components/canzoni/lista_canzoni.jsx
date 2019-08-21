import React from "react";
import { connect } from "react-redux";
import Canzone from "./canzone";

const ListaCanzoni = ({ canzoni }) => (
  <ul>
    {canzoni.map(canzone => (
      <Canzone key={canzone.id} text={canzone.titolo} />
    ))}
  </ul>
);

const getCanzoni = canzoni => {
  console.log(canzoni);
  return canzoni;
};

const mapStateToProps = state => ({
  canzoni: getCanzoni(state)
});

export default connect(mapStateToProps)(ListaCanzoni);
