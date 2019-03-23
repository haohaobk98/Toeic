import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Part1 from './Part1';
import SignUpForm from './SignUpForm'
import {connect} from 'react-redux';
import Container from './Container';
import SignIn from './SignIn'
class SignUp extends React.Component{
    render(){
        var {username} = this.props;
        var html = username == null?<SignUpForm />: <SignIn />
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


// cong viec ngay mai, 
// lam giao dien lam bai thi va giao dien sau khi nop bai ket thuc
// them bang xep hang nua