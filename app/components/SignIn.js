import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import SignInForm from './SignInForm';
import Container from './Container';
import AdminAdd from './AdminAdd';
class SignIn extends React.Component{

    render(){
        var {username} = this.props;
        var html1 = username == null? <SignInForm/>: <Container/>
        var html1 = username =="admin"?<AdminAdd />:html1
        var {notification} = this.props;
      
        return(
            <div>
                {html1}
                
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