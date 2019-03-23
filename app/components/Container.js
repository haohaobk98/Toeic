import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import UserMain from './UserMain';
import NotUserMain from './NotUserMain';
import {Link, IndexLink} from 'react-router';

class Container extends React.Component{
    render(){
        var {username} = this.props;
        var html = username == null? <NotUserMain />: <UserMain/>
        return( 
            <div>
                {html}
            </div>
        )
    }
    componentDidMount(){
       
    }
}

module.exports = connect(function(state){
    return {
        username: state.username,
        readScore: state.readScore,
        listenScore: state.listenScore, 
        submited: state.submited
    }
})(Container);



/*

<button onClick={this.handleButton.bind(this)}><Link to='/De1'> Test 1 </Link></button>
<button onClick={this.handleButton.bind(this)}><Link to='/De2'> Test 2 </Link></button>     


*/




