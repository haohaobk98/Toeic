import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SignIn from './SignIn';
import {connect} from 'react-redux';
class SignUpForm extends React.Component{
    handleSignUp(e){
        e.preventDefault();
        var {dispatch} = this.props;
        var {txtusername, txtemail, txtpassword} = this.refs;
        axios.post('/signup',{username: txtusername.value, email: txtemail.value, password: txtpassword.value})
        .then((res)=>{
            if(res.data.title == "THAT_BAI"){
                alert("Please fill out all information!");
            }else{
                alert("Sign up sucessfully!");
                dispatch({type:"LOGIN",username:txtusername.value})
            }
        })
        .catch((err)=>console.log(err))
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSignUp.bind(this)}>
                <label>Username:</label>
                <input type="text" ref="txtusername" placeholder="Enter your username" required/>
                <br></br>
                <label>Email: </label>
                <input type="email" ref="txtemail" placeholder="Enter your email" required/>
                <br></br>
                <label>PassWord:</label>
                <input type="password" ref="txtpassword" placeholder="Enter your password" required/>
                <br></br>
                <button type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

module.exports = connect()(SignUpForm);