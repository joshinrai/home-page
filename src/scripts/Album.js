/***
 * @author : joshinrai
 * @date : 2017-05-21
 */
import React, { Component } from 'react';

import img1 from '../resource/img1.jpg' ;
import img2 from '../resource/img2.jpg' ;
import img3 from '../resource/img3.jpg' ;
import img4 from '../resource/img4.jpg' ;
import img5 from '../resource/img5.jpg' ;

var albumArr = [{ src : img1 , alt : "img1" },{ src : img2 , alt : "img2"},
				{ src : img3 , alt : "img3" },{ src : img4 , alt : "img4"},
				{ src : img5 , alt : "img5" }] ;
var _this,selfTop ;

class AlbumList extends Component {
	functionTest(){
		console.log("this is function test ...") ;
	}
	state = {
		index:0,data:albumArr,
		selfStyle : {
			position:'relative',
			top:'0',
		}
	}
	setMoveState(){
		_this.setState({index:0,data:albumArr,
			selfStyle : {
				position:'relative',
				top:selfTop+"%",
			}
		}) ;
	}
	startMove(){
		_this = this ;

  		//添加parseInt的第二个参数，否则语法校验会报Missing radix parameter的错
  		selfTop =  parseInt( _this.state.selfStyle.top.replace("px","") ,10) ;
  		_this.interval = setInterval(_this.doMove , 30) ;
	}
	stopMove(){
		this.interval && clearInterval(this.interval) ;
	}
	doMove(){
		selfTop = -100 === selfTop ? 0 : Math.ceil(selfTop*10-1)/10 ;
		if(0 === selfTop % 25){
			_this.stopMove() ;
			setTimeout(()=>{_this.startMove()},1000) ;
		}
  		
		_this.setMoveState() ;
	}
	componentDidMount(){
		this.startMove() ;
	}
	componentWillUnmount(){
  		this.stopMove() ;
  	}
	render(){
		var self = this ;
		var data = self.state.data.concat(self.state.data) ;
		var menus = data.map(function(item,index){
			return <li style={self.state.selfStyle} key={item.alt+"-"+index} onClick={self.functionTest}>
						<img className="img-style" src={item.src} alt={item.alt}/>
					</li> ;
		}) ;
		return <ul className="cell-module">{menus}</ul> ;
	}
}

class Album extends Component {
  	render() {
	    return (
	      <div className="Hidde-OverFlow">
	      	<AlbumList items={albumArr}/>
	      </div>
	    );
  	}
}

export default Album;