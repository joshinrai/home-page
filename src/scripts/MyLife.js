import React, { Component } from 'react';
import github from "../resource/github.jpg" ;
import email from "../resource/email.png" ;
import homepage from "../../public/joshinrai.jpg" ;

class MyLife extends Component {
  render() {
    return (
      <div id="life-cell">
        <ul className="cell-module module-3">
          <li>新闻
          </li>
          <li>游戏
          </li>
          <li>与我联系:
            <p>
              <a href="mailto:joshinrai@163.com">
                <img src={email} alt="email" className="icon-style"/>
              </a>
              <a href="http://47.93.0.22:3000" target="_blank">
                <img src={homepage} alt="homepage" className="icon-style"/>
              </a>
              <a href="https://github.com/joshinrai" target="_blank">
                <img src={github} alt="github" className="icon-style"/>
              </a>
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default MyLife;