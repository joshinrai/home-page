import React, { Component } from 'react';
import logo from '../resource/logo.svg';
import '../stylesheet/App.css';

import Content from './Content' ;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Content />
        </div>
        <p className="App-intro">
          ©joshinrai
        </p>
      </div>
    );
  }
}

export default App;
