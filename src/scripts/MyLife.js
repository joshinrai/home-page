import React, { Component } from 'react';

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
              <p>email:joshinrai@163.com</p>
              <p>github:https://github.com/joshinrai</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default MyLife;