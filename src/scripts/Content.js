import React, { Component } from 'react';
import Album from './Album' ;
import Blog from './Blog' ;
import MyWork from './MyWork' ;
import Video from './Video' ;
import MyLife from './MyLife' ;

class Content extends Component {
  render() {
    return (
      <ul>
        <li>
          我的相册
          <Album />
        </li>
        <li>
          我的技术博客
          <Blog />
        </li>
        <li>
          我的个人作品
          <MyWork />
        </li>
        <li>
          我的影音
          <Video />
        </li>
        <li>
          我的生活
          <MyLife />
        </li>
      </ul>
    );
  }
}

export default Content;