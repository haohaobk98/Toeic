import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import Picture from './Picture';
var {Link, IndexLink} = require('react-router');
class NotUser extends React.Component{
  handleSignIn(){
    var {dispatch} = this.props;
    dispatch({type: 'OPEN'});
  }
  handleSignUp(){
    var {dispatch} = this.props;
    dispatch({type: 'SignUp'});
  }
    render(){
        return(
            <div>
                <nav className="navbar navbar-inverse">
            <div className="container">
              <div className="navbar-header">
               <a href="#"><img className="navbar-brand" width="400" height="150" src="https://data.tienganh123.com/images/v2/home/logo.png" /></a> 
              </div>
      
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li ><button className="btn-header"><img width='20' height="20" src="https://image.flaticon.com/icons/png/128/1250/1250659.png"/><IndexLink to="/signin" className='link' onClick={this.handleSignIn.bind(this)}>SignIn <span className="sr-only">(current)</span></IndexLink></button></li>
                  <li ><button className="btn-header"><img width='20' height="20" src="https://cdn3.iconfinder.com/data/icons/user-interface-2-9/34/169-512.png"/><Link to="/signup" className='link' onClick={this.handleSignUp.bind(this)}>SignUp</Link></button></li>
                </ul> 
              </div>
              
            </div>
          </nav>
            <Picture />
            </div>
        )
    }
}

module.exports = connect()(NotUser);