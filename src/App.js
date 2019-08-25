import React from 'react';
import { Component } from 'react';
import './App.css';
// import { Bottonestart } from './components/bottone/bottone-start.component';
// import { Card } from './components/card/card.component';
import { Configuratore } from './components/configuratore/configuratore.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Configuratore className="Component" />
        </header>
      </div>
      /*
          <Card className="Component" />
        <Bottonestart className="Component" />
        */
    );
  }
}

export default App;
