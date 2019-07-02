import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {connect} from 'react-redux';

class CreateExample extends React.Component{
    handleExample(e){
        var {STT,dispatch} = this.props;
        
        e.preventDefault();
        // gui request len server thi can them 1 so thong tin nhu sau
        // part may, STT question, de thi so may
        axios.post('/addExample',{
            image: this.refs.image.value,
            textQuestion: "",
            radio1: "A",
            radio2: "B",
            radio3: "C",
            radio4: "D",
            answer: "B",
            part:"Example1",
            number: "Example1",
            test: 'De6'
        })
        .then((res)=>{
             this.refs.image.value= "";
             dispatch({type:'INCREASE'})
        })
        .catch((err)=>console.log(err))
    }
    render(){
        var {STT} = this.props;
        return(
            <div>
                <form onSubmit = {this.handleExample.bind(this)}>
                <h2>Example</h2> 
                <label>Image:</label>
                <input type="text" ref="image"/><br></br>
                <button type='submit'>Add</button>
                </form>
            </div>
        )
    }
}

module.exports = connect(function(state){
    return {
        STT: state.STT
    }
})(CreateExample);

