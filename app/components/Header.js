import React from 'react';
import ReactDOM from 'react-dom';
var NotUser = require('./NotUser');
var User = require('./User');
import {connect} from 'react-redux';
class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: ""
    }
  }
    render(){
      var {username} = this.props;
      var html = username != null ? <User/>: <NotUser/>;
        return(
            <div>
              {html}
            </div>
        )
    }
}

module.exports = connect(function(state){
  return {
    username: state.username
  }
})(Header);