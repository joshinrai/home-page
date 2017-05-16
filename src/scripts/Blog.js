import React, { Component } from 'react';
var blogArr =[{title:"react",content:"react 是一个js框架"},{title:"http协议",content:"http协议是应用层协议"},
			{title:"node",content:"node指的是nodejs"}] ;

class Blog extends Component {
  state = {
  	index : 0,title:blogArr[0].title,content:blogArr[0].content
  }
  componentDidMount(){
  	var self = this ;
  	this.interval = setInterval(function(){
  		var _index = self.state.index ;
  		if( ++_index === blogArr.length)
  			_index = 0 ;
  		var obj = blogArr[_index] ;
  		self.setState({index : _index,title:obj.title,content:obj.content}) ;
  	},5000) ;
  }
  componentWillUnmount(){
  	this.interval && clearInterval(this.interval) ;
  }
  render() {
    return (
      <div id="blog-cell">
        <h3>{this.state.title}</h3>
        <hr/>
        {this.state.content}
      </div>
    );
  }
}

export default Blog;