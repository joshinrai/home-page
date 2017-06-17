import React, { Component } from 'react';
var arr = [{name : "影音1" , id : 1} , {name : "影音2" , id : 2} , {name : "影音3" , id : 3} ] ;

/*class Menu extends Component{
  render(){
    return(<li>{this.props.link}</li>) ;
  }
}*/

class ViedeoList extends Component{
  render(){
    var menus = this.props.items.map(function(item){
        //return <Menu key={item.id} link={item.name} /> ;
        return <li key={item.id}>{item.name}</li> ;
    }) ;
    return (<ul className="cell-module">{menus}</ul>) ;
  }
}

class Video extends Component {
  render() {
    return (
      <div id="video-cell">
          <ViedeoList items={arr}/>
      </div>
    );
  }
}

export default Video;