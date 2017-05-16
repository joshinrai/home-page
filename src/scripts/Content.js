import React, { Component } from 'react';

class Content extends Component {
  render() {
    var menus = this.props.items.map(function(item){
        return <li key={item.id}>{item.name}{item.module}</li> ;
    }) ;
    return (
      <ul>
        {menus}
      </ul>
    );
  }
}

export default Content;