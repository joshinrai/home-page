import React, { Component } from 'react';
//import Slick from './common/slider' ;
var workArr = [{name:"作品1",id:"work1"},{name:"作品2",id:"work2"},{name:"作品3",id:"work3"}] ;

class MyWorkList extends Component{
  render(){
    var menus = this.props.items.map(function(item){
        return <li key={item.id}>{item.name}</li> ;
    }) ;
    return(<ul className="cell-module">{menus}</ul>) ;
  }
}

class MyWork extends Component {
  render() {
    return (
      <div id="work-cell">
        <MyWorkList items={workArr}/>
      </div>
    );
  }
}

export default MyWork;