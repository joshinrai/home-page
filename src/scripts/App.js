import React, { Component } from 'react';
import logo from '../resource/logo.svg';
//import background from '../../public/background-1.jpg' ;
import '../stylesheet/App.css';

import Content from './Content' ;

import Album from './Album' ;
import Blog from './Blog' ;
import MyWork from './MyWork' ;
import Video from './Video' ;
import MyLife from './MyLife' ;
/*<img src={background} className="Back_img"/>*/
var contentArr = [{name:"我的相册",id : "album",module:<Album />},{name:"我的博客",id : "blog",module:<Blog />},
                  {name:"我的作品" , id : "work",module:<MyWork />},
                  {name:"我的影音" , id : "video",module:<Video />},{name:"我的生活" , id : "my-life",module:<MyLife />}] ;

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Content items={contentArr}/>
        </div>
        <p className="App-intro">
          ©joshinrai
        </p>
      </div>
    );
  }
}

export default App;
