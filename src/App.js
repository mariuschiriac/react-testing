import React from "react";
import { Component } from "react";
import "./App.css";
import { Bottonestart } from "./components/bottone/bottone-start.component";
import { Configuratore } from "./components/configuratore/configuratore.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Bottonestart className="Component" />
        </header>
      </div>
      /*
        <Configuratore className="Component" />
        */
    );
  }
}

export default App;
