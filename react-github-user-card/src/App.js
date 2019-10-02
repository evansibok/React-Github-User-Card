import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/CardList';


class App extends Component {

  constructor () {
    super();

    this.state = {

    }
  }

  render () {
    return (
      <div className="App">
        <h1>This is the beginning of your App!</h1>
        <CardList />

      </div>
    )
  }
}

export default App;