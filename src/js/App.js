import React, { Component } from 'react';
import logo from '../resource/logo.svg';
import '../stylesheet/App.css';
//import content from './content' ;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li>
              我的相册
              <div className="body-content-test">test</div>
            </li>
            <li>我的技术博客</li>
            <li>我的个人作品</li>
            <li>我的影音</li>
            <li>我的生活</li>
          </ul>
        </div>
        <p className="App-intro">
          ©joshinrai
        </p>
      </div>
    );
  }
}

export default App;
