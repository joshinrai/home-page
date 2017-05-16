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
	render(){
		var self = this ;
		var menus = this.props.items.map(function(item){
			return <li key={item.alt} onClick={self.functionTest}>
						<img className="img-style" src={item.src} alt={item.alt}/>
					</li> ;
		}) ;
		return <ul className="cell-module">{menus}</ul> ;
	}
}

class Album extends Component {
	/*intervalFunction(){
		setInterval(function(){
			albumArr.unshift(albumArr[albumArr.length-1]) ;
			albumArr.pop() ;
		} , 2000) ;
	}*/
  	render() {
  		//this.intervalFunction() ;
	    return (
	      <div>
	      	<AlbumList items={albumArr}/>
	      </div>
	    );
  	}
}

export default Album;