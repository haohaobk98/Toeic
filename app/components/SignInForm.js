import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {connect} from 'react-redux';
class SignInForm extends React.Component{
    handleSignin(e){
        e.preventDefault();
        var {dispatch, notification} = this.props;
        axios.post('/login',{username: this.refs.txtusername.value,password:this.refs.txtpassword.value})
        .then((res)=>{
            if(res.data == "DANG_NHAP_THANH_CONG"){
                dispatch({type:'LOGIN',username:this.refs.txtusername.value});
            }else{
                dispatch({type:'SHOW_NOTI',msg:"Username or password is not correct!"});
                console.log("to here");
                console.log(notification);
            }
        })
        .catch((err)=>console.log(err))
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSignin.bind(this)}>
                <label>Username:</label>
                <input type="text" ref="txtusername" placeholder="Enter your account"/>
                <br></br>
                <label>PassWord:</label>
                <input type="password" ref="txtpassword" placeholder="Enter your password"/>
                <br></br>
                <button type="submit">Sign In</button>
                </form>
            </div>
        )
    }
}

module.exports = connect(function(state){
    return{
        username: state.username,
        notification: state.notification
    }
})(SignInForm);