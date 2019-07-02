import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import CreatePart1 from './CreatePart1';
import CreatePart2 from './CreatePart2';
import CreatePart3 from './CreatePart3';
import CreatePart4 from './CreatePart4';
import CreatePart5 from './CreatePart5';
import CreatePart6 from './CreatePart6';
import CreatePart7 from './CreatePart7';
import AdminMain from './AdminMain';
import CreateExample from './CreateExample';
import CreateQuestion1 from './CreateQuestion1';

class AdminAdd extends React.Component{
   
    render(){     
        var {addpart,STT} = this.props;
        var html =  addpart == false ? <AdminMain /> : <CreateExample />
        html = STT > 0 ? <CreatePart1 />: html
        html = STT == 1 ? <CreateQuestion1/>: html
        html = STT > 10 ? <CreatePart2/>: html
        html = STT > 40 ? <CreatePart3 />: html
        html = STT > 70 ? <CreatePart4 />: html
        html = STT > 100 ? <CreatePart5 />: html
        html = STT > 140 ? <CreatePart6 />: html
        html = STT > 170 ? <CreatePart7 />: html
        html = STT == 201 ? <AdminMain />:html
        if(html == null){
           return(
               <div>
                   Nothing
               </div>
           )
        }else{
            return (
                <div>
                    {html}
                </div>
            )
            
        }

        
    }

}

module.exports = connect(function(state){
    return {
        username: state.username,
        readScore: state.readScore,
        listenScore: state.listenScore, 
        isDone: state.isDone,
        numberDoTest: state.numberDoTest,
        testNumber: state.testNumber,
        loadde1: state.loadde1,
        loadde2: state.loadde2,
        loadde3: state.loadde3,
        loadde4: state.loadde4,
        loadde5: state.loadde5,
        addpart: state.addpart,
        STT: state.STT

    }
})(AdminAdd);




