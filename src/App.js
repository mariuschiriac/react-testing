import React from "react";
import { Component } from "react";
import "./App.css";
import { Bottonestart } from "./components/bottone/bottone-start.component";
import { Card } from "./components/card/card.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card className="Component" />
        </header>
      </div>
      /*
        <Bottonestart className="Component" />
        */
    );
  }
}

export default App;
