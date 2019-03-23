import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import Notification from './Notification';
// class SignInForm extends React.Component{
//     handleSignin(e){
//         e.preventDefault();
//         var {dispatch, notification} = this.props;
//         axios.post('/login',{username: this.refs.txtusername.value,password:this.refs.txtpassword.value})
//         .then((res)=>{
//             if(res.data == "DANG_NHAP_THANH_CONG"){
//                 dispatch({type:'LOGIN',username:this.refs.txtusername.value});
//             }else{
//                 dispatch({type:'SHOW_NOTI',msg:"Username or password is not correct!"});
//                 console.log("to here");
//                 console.log(notification);
//             }
//         })
//         .catch((err)=>console.log(err))
//     }
//     render(){
//         return(
//             <div>
//                 <form onSubmit={this.handleSignin.bind(this)}>
//                 <label>Username:</label>
//                 <input type="text" ref="txtusername" placeholder="Enter your account"/>
//                 <br></br>
//                 <label>PassWord:</label>
//                 <input type="password" ref="txtpassword" placeholder="Enter your password"/>
//                 <br></br>
//                 <button type="submit">Sign In</button>
//                 </form>
//             </div>
//         )
//     }
// }

// module.exports = connect(function(state){
//     return{
//         username: state.username,
//         notification: state.notification
//     }
// })(SignInForm);

import { Component } from 'react';
import Modal from 'react-awesome-modal';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }
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

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        var {dispatch} = this.props;
        dispatch({type: 'OPEN'});
    }

    render() {
        var {setSignIn, notification} = this.props;
        var html2 = notification == null ? null: <Notification txt={notification}/>;
        return (
            <section>
               
                <Modal visible={setSignIn} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()} className="modal">
                    <div className="wrapper">
                    <form className="modal-content animate" onSubmit={this.handleSignin.bind(this)} className="form-login">
                    <div className="imgcontainer">
                         <img src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" alt="Avatar" className="avatar"/>
                     </div>
                <label>Username:</label>
                <input type="text" ref="txtusername" placeholder="Enter your account"/>
                <br></br>
                <label>PassWord:</label>
                <input type="password" ref="txtpassword" placeholder="Enter your password"/>
                <br></br>
                <label>
                     <input type="checkbox" checked="checked" name="remember"/> Remember me
                 </label>
                 {html2}
                <button type="submit">Sign In</button>
                </form>
                       
                    </div>
                </Modal>
            </section>
        );
    }
}

module.exports = connect(function(state){
    return{
        username: state.username,
        notification: state.notification,
        setSignIn: state.setSignIn
    }
})(SignInForm);