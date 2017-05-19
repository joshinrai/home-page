import React, { Component } from 'react';

import img1 from '../resource/img1.jpg' ;
import img2 from '../resource/img2.jpg' ;
import img3 from '../resource/img3.jpg' ;
import img4 from '../resource/img4.jpg' ;
import img5 from '../resource/img5.jpg' ;

var albumArr = [{ src : img1 , alt : "img1" },{ src : img2 , alt : "img2"},
				{ src : img3 , alt : "img3" },{ src : img4 , alt : "img4"},
				{ src : img5 , alt : "img5" }] ;

class AlbumList extends Component {
	functionTest(){
		console.log("this is function test ...") ;
	}
	state = {
		index:0,data:albumArr,
		selfStyle : {
			position:'relative',
			width:'99%',
			top:'2px',
		}
	}
	/*selfStyle = {
		position:'relative',
		width:'95%',
		top:'2px',
	}*/
	componentDidMount(){
		var self = this ;
		/*this.interval = setInterval(function(){
	  		var _index = self.state.index ;
	  		if( ++_index === albumArr.length)
	  			_index = 0 ;
	  		var _arr = albumArr ;
	  		var _list = _arr.splice(1 , _arr.length-1) ;
	  		var list = _list.concat(_arr) ;
	  		albumArr = list ;
  			self.setState({index : _index , data : list}) ;
  		},2000) ;*/
  		//添加parseInt的第二个参数，否则语法校验会报Missing radix parameter的错
  		var selfTop =  parseInt( self.state.selfStyle.top.replace("px","") ,10) ;
  		this.interval = setInterval(()=>{
  			self.state.selfStyle.top = ++selfTop + "px" ;
  			console.log("this is style:" , self.state.selfStyle) ;
  		},2000) ;
	}
	componentWillUnmount(){
  		this.interval && clearInterval(this.interval) ;
  	}
	render(){
		var self = this ;
		var menus = self.state.data.map(function(item){
			return <li style={self.state.selfStyle} key={item.alt} onClick={self.functionTest}>
						<img className="img-style" src={item.src} alt={item.alt}/>
					</li> ;
		}) ;
		return <ul className="cell-module">{menus}</ul> ;
	}
}

class Album extends Component {
  	render() {
	    return (
	      <div>
	      	<AlbumList items={albumArr}/>
	      </div>
	    );
  	}
}

export default Album;