import React from 'react';
import { Component } from 'react';
import './App.css';
import { Configuratore } from './components/configuratore/configuratore.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Configuratore />
      </div>
    );
  }
}

export default App;
