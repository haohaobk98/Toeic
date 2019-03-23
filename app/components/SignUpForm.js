import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SignIn from './SignIn';
import {connect} from 'react-redux';
import Modal from 'react-awesome-modal';
class SignUpForm extends React.Component{
    handleSignUp(e){
        e.preventDefault();
        var {dispatch} = this.props;
        var {txtusername, txtemail, txtpassword} = this.refs;
        axios.post('/signup',{username: txtusername.value, email: txtemail.value, password: txtpassword.value})
        .then((res)=>{
            if(res.data.title == "THAT_BAI"){
                alert("Please fill out all information!");
            }
            else if(res.data.title == "TRUNG_TEN"){
                alert("username existed! Choose another name!");
            }else{
                alert("Sign up sucessfully!");
                dispatch({type:"LOGIN",username:txtusername.value})
            }
        })
        .catch((err)=>console.log(err))
    }
    render(){
        var {setSignUp} = this.props;
        return(
            <section>
               
            <Modal visible={setSignUp} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()} className="modal">
                <div className="wrapper">
                <form className="modal-content animate" onSubmit={this.handleSignUp.bind(this)} className="form-login">
                <div className="imgcontainer">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8SO68-LJq2RJdIs7EQAPP1OFbO7Fo50YO_2TLx11iNK8pdYLO" alt="Avatar" className="avatar"/>
                 </div>
            <label>Username:</label>
            <input type="text" ref="txtusername" placeholder="Enter your account"/>
            <br></br>
            <label>Email:</label>
            <input type="email" ref="txtemail" placeholder="Enter your email"/>
            <br></br>
            <label>PassWord:</label>
            <input type="password" ref="txtpassword" placeholder="Enter your password"/>
            <br></br>
            <button type="submit">Sign Up</button>
            </form>
                   
                </div>
            </Modal>
        </section>
        )
    }
}

module.exports = connect(function(state){
    return {
        setSignUp: state.setSignUp
    }
})(SignUpForm);