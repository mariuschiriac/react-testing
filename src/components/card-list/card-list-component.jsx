import React, { Component } from "react";
import { Card } from "../card/card-component";
import "./card-list.styles.css";

export default class CardListComponent extends Component {
  constructor() {
    super();
    this.state = {
      weapons: []
    };
  }

  componentDidMount() {
    this.loadData();
    this.intervalId = setInterval(() => this.loadData(), 15000);
  }

  loadData() {
    fetch(
      "https://my-json-server.typicode.com/mariuschiriac/fake-server/weapons"
    )
      .then(response => response.json())
      .then(weapons => this.setState({ weapons: weapons }))
      .then(console.log(this.state.weapons));
  }

  componentWillUnmount() {
    clearInterval(this.state);
  }

  render() {
    return (
      <div className="card-list">
        {this.state.weapons.map(weapon => (
          <section key={weapon.id}>
            <div>
              <Card weapons={weapon} />
            </div>
          </section>
        ))}
      </div>
    );
  }
}
