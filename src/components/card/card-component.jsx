import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./card.style.css";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    "&:hover": {
      background: "linear-gradient(red, yellow)"
    }
  }
}));

export const Card = props => {
  const classes = useStyles();

  return (
    <div className="card-container">
      <img
        alt={"Weapon " + props.weapons.id}
        title={"Weapon " + props.weapons.id}
        src={
          "https://source.unsplash.com/collection/$" +
          props.weapons.id +
          "/250x250"
        }
      />
      <Paper className={classes.root}>
        <h1>{props.weapons.name} </h1>
        <h2>
          attacco {props.weapons.damageMin} - {props.weapons.damageMax}
        </h2>
      </Paper>
    </div>
  );
};
