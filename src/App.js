import React from "react";
import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list-component";
import { NavBar } from "./components/navbar/navbar.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      weapons: []
    };
  }

  componentDidMount() {
    fetch(
      "https://my-json-server.typicode.com/mariuschiriac/fake-server/weapons"
    )
      .then(response => response.json())
      .then(weapons => this.setState({ weapons: weapons }));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <CardList weapons={this.state.weapons} />
      </div>
    );
  }
}

export default App;
