import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {connect} from 'react-redux';
var Header = require('./Header');
class Main extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                {this.props.children}
            </div>
        )
    }
    componentDidMount(){
        var {dispatch} = this.props;
      
        axios.get('/loadPage')
        .then((res)=>{
            if(res.data.title == "DA_DANG_NHAP"){
                dispatch({type:'LOGIN',username:res.data.username})
            }
        })
        .catch((err)=>console.log(err))
    }
}

module.exports = connect(function(state){
    return {
        username: state.username
    }
})(Main);

