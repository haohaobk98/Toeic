import React from 'react';
import ReactDOM from 'react-dom';
var {Link, IndexLink} = require('react-router');
import {connect} from 'react-redux';
class User extends React.Component{
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
                <a  className="active" className="navbar-brand" href="#">English123.com</a>
              </div>
      
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li   className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></Link>
                    <ul className="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#">Separated link</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#">One more separated link</a></li>
                    </ul>
                  </li>
                  <li className="li-right"><a href="#"><img className="user-image" src="https://giasutoeic.com/static/RealEdu/images/user_icon.png"/> {username}</a></li>
                </ul>
              </div>
              
            </div>
          </nav>
              <div className="jumbotron text-center">
                <div className="container">
                  <h1>Welcome To My Website</h1>
                  <p>English - Open Your World</p>
                  <a href="#" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
        )
    }
}

module.exports = connect(function(state){
    return {
        username: state.username
    }
})(User);