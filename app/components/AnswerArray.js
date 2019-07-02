import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {connect} from 'react-redux';

class AnswerArray extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Array: []
        }
    }
    render(){
        return(
            <div>
               <table>
                   <tr>
                       <th>Câu </th>
                       <th>Đáp án bạn chọn</th>
                       <th>Đáp án đúng</th>
                   </tr>
                   {this.state.Array.map((e,i)=>{
                   return(
                       <tr>
                           <td>{parseInt(i)+1}</td>
                           <td>{e.value}</td>
                           <td>{e.answer}</td>
                       </tr>
                   )
               })}
               </table>
            </div>
        )
    }
    componentDidMount(){
        var {testNumber,array} = this.props;
        axios.post('/getAnswer',{testNumber,array})
        .then((res)=>{
            this.state ={
                Array: res.data.Array
            }
            this.setState(this.state);
        })
        .catch((err)=>console.log(err))
    }
}
module.exports = connect(function(state){
    return{
        testNumber: state.testNumber,
        array: state.array
    }
})(AnswerArray);