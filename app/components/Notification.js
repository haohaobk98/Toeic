import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

class Notification extends React.Component{
    render(){
        return(
            <div>
                {this.props.txt}
            </div>
        )
    }
    componentDidMount(){
        var {dispatch} = this.props;
        setTimeout(()=>{
            dispatch({type:'HIDE_NOTI'})
        },3000);
    }
}

module.exports =connect()(Notification);