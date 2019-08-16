import React from 'react';
import { Component } from 'react';
import './App.css';
import { CardList } from "./components/card-list/card-list-component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      weapons: []
    }
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/mariuschiriac/fake-server/weapons')

      .then(response => response.json())
      .then(weapons => this.setState({ weapons: weapons }))
  }

  render() {
    return (
      <div className="App">
        <CardList name="weapons">

          {
            this.state.weapons.map(weapons => <h1 key={weapons.id}>{weapons.name}</h1>)
          }
        </CardList>
      </div>
    );
  }
}

export default App;
