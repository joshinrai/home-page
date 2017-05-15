import React, { Component } from 'react';
import logo from '../resource/logo.svg';
import '../stylesheet/App.css';

import img1 from '../resource/img1.jpg' ;
import img2 from '../resource/img2.jpg' ;
import img3 from '../resource/img3.jpg' ;
import img4 from '../resource/img4.jpg' ;
import img5 from '../resource/img5.jpg' ;

import video1 from '../resource/flash1.fla' ;
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
              <div>
                <ul className="cell-album">
                  <li>
                    <img className="img-style" src={img1} alt="img1"/>
                  </li>
                  <li>
                    <img className="img-style" src={img2} alt="img2"/>
                  </li>
                  <li>
                    <img className="img-style" src={img3} alt="img3"/>
                  </li>
                  <li>
                    <img className="img-style" src={img4} alt="img4"/>
                  </li>
                  <li>
                    <img className="img-style" src={img5} alt="img5"/>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              我的技术博客
              <div id="blog-cell">
                <h3>关于http协议和https的差异</h3>
                <hr/>
                http协议
              </div>
            </li>
            <li>
              我的个人作品
              <div id="work-cell">
                <ul className="cell-album">
                  <li>作品1
                  </li>
                  <li>作品2
                  </li>
                  <li>作品3
                  </li>
                  <li>作品4
                  </li>
                  <li>作品5
                  </li>
                </ul>
              </div>
            </li>
            <li>
              我的影音
              <div id="video-cell">
                <ul className="cell-album">
                  <li>
                    <video src={video1}></video>
                  </li>
                  <li>影音2
                  </li>
                  <li>影音3
                  </li>
                  <li>影音4
                  </li>
                  <li>影音5
                  </li>
                </ul>
              </div>
            </li>
            <li>
              我的生活
              <div id="life-cell">
                <ul className="cell-album album-3">
                  <li>新闻
                  </li>
                  <li>游戏
                  </li>
                  <li>与我联系:
                      <p>email:joshinrai@163.com</p>
                      <p>github:https://github.com/joshinrai</p>
                  </li>
                </ul>
              </div>
            </li>
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
