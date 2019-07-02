import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {connect} from 'react-redux';

class CreatePart6 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value: ""
        }
    }
    handleChange(e){
        e.preventDefault();
        this.setState({value: e.target.value})
    }
    handlePart1(e){
        var {STT,dispatch} = this.props;
        
        e.preventDefault();
        // gui request len server thi can them 1 so thong tin nhu sau
        // part may, STT question, de thi so may
        axios.post('/addPart1',{
            audio: "",
            image: "",
            textQuestion: this.state.value,
            radio1: "A)" + this.refs.optionA.value,
            radio2:  "B)" +this.refs.optionB.value,
            radio3:  "C)" +this.refs.optionC.value,
            radio4:  "D)" +this.refs.optionD.value,
            answer: this.refs.answer.value,
            part:6,
            number: STT,
            test: 'De6'
        })
        .then((res)=>{
            
            this.setState({value:""});
             this.refs.optionA.value= "";
             this.refs.optionB.value= "";
             this.refs.optionC.value= "";
             this.refs.optionD.value= "";
             this.refs.answer.value= "";
             dispatch({type:'INCREASE'})
        })
        .catch((err)=>console.log(err))
    }
    render(){
        var {STT} = this.props;
        return(
            <div className="add_forum">
                <form onSubmit = {this.handlePart1.bind(this)}>
                <h2>Question {STT}</h2> 
                <label>TextQuestion</label>
                <textarea ClassName="text-area" value={this.state.value} onChange={this.handleChange.bind(this)}></textarea><br></br>
                <input type='radio'/> A) <input type="text" ref="optionA" /> <br></br>
                <input type='radio'/> B) <input type="text" ref="optionB"  /> <br></br>
                <input type='radio'/>C) <input type="text" ref="optionC"  /> <br></br>
                <input type='radio'/>D) <input type="text" ref="optionD"  /> <br></br>
                <label>Answer</label>
                <input type='text' ref='answer' /> <br></br>
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
})(CreatePart6);

