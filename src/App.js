import React, { Component } from 'react';
import './App.css';
import { CatApi } from './CatApi';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>Cat-egory</h2>
        <CatApi />
      </div>
    );
  }
}

export default App;
