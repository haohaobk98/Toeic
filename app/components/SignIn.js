import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import SignInForm from './SignInForm';
import Container from './Container';
var Notification = require('./Notification');
class SignIn extends React.Component{

    render(){
        var {username} = this.props;
        var html1 = username == null? <SignInForm/>: <Container/>
        var {notification} = this.props;
        var html2 = notification == null ? null: <Notification txt={notification}/>;
        return(
            <div>
                {html1}
                {html2}
            </div>
        )
    }
}

module.exports = connect(function(state){
    return{
        username: state.username,
        notification: state.notification
    }
})(SignIn);