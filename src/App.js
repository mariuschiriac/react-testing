import React from "react";
import { Component } from "react";
import "./App.css";
import { NavBar } from "./components/navbar/navbar.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
