import React, { Component } from 'react';

var _this ;

class Content extends Component {
  state = {
    style:{

    }
  }
  //手风琴效果
  accordion(){
    console.log("this is mouseOver ...",_this) ;
  }
  componentDidMount(){
    _this = this ;
  }
  render() {
    var self = this ;
    var menus = this.props.items.map(function(item){
        return <li key={item.id} onMouseOver={self.accordion}>{item.name}{item.module}</li> ;
    }) ;
    return (
      <ul>
        {menus}
      </ul>
    );
  }
}

export default Content;