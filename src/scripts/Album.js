import React, { Component } from 'react';

import img1 from '../resource/img1.jpg' ;
import img2 from '../resource/img2.jpg' ;
import img3 from '../resource/img3.jpg' ;
import img4 from '../resource/img4.jpg' ;
import img5 from '../resource/img5.jpg' ;

class Album extends Component {
  render() {
    return (
      <div>
        <ul className="cell-module">
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
    );
  }
}

export default Album;