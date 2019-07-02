import React from 'react';
import ReactDOM from 'react-dom';
var {Link, IndexLink} = require('react-router');
import {connect} from 'react-redux';
import Picture from './Picture';
import axios from 'axios';
class User extends React.Component{
  logout(e){
    var {dispatch} = this.props;
    e.preventDefault();
    axios.get('/logout')
    .then((res)=>{
      if(res.data.title == 'LOGOUT'){
        dispatch({type:'LOGOUT'})
      }
    })
    .catch((err)=>console.log(err))
  }
    render(){
        var {username} = this.props;
        return(
            <div>
                <nav className="navbar navbar-inverse">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a href="#"><img className="navbar-brand" width="400" height="150" src="https://data.tienganh123.com/images/v2/home/logo.png" /></a> 
              </div>
      
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                
                  <li className="li-right"><a href="#"><img className="user-image" width='20' height='20' src="https://giasutoeic.com/static/RealEdu/images/user_icon.png"/> {username}</a></li>
                  <li ><button className="btn-header"><img width='20' height="20" src="https://cdn1.iconfinder.com/data/icons/materia-arrows-symbols-vol-3/24/018_128_arrow_exit_logout-512.png"/><Link to="/signup" className='link' onClick={this.logout.bind(this)}>Logout</Link></button></li>
                </ul>
              </div>
              
            </div>
          </nav>
             <Picture />
            </div>
        )
    }
}

module.exports = connect(function(state){
    return {
        username: state.username
    }
})(User);