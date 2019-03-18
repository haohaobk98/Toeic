import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SignIn from './SignIn';
import Part1 from './Part1';
import SignUpForm from './SignUpForm'
import {connect} from 'react-redux';
class SignUp extends React.Component{
    render(){
        var {username} = this.props;
        var html = username == null?<SignUpForm />: <Part1 />
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
})(SignUp);