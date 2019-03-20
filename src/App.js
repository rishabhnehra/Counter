import React, { Component } from 'react';
import './App.css';

import Container from './containers/Container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Counter App</h1>
          <Container />
        </header>
      </div>
    );
  }
}

export default App;