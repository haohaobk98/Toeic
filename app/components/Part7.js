import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {connect} from 'react-redux';
class Part7 extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [
                {
                   textQuestion:"",
                   radio1: "",
                   radio2: "",
                   radio3: "",
                   radio4: "",
                   number: "",
                   textAfterNumber: "",
                   refer:""
                }
            ],
            test:""
        }
        this.handleRadio = this.handleRadio.bind(this)
    }
    handleRadio(e){
        var number = e.target.name;
        var index= e.target.id;
        var value = e.target.value;
        var {array,dispatch,indexArray} = this.props;
        axios.post('/checkIndexExist',{index,array,value,number})
        .then((res)=>{
          if(res.data.title == "UPDATE"){ 
            console.log("update");
            dispatch({type:'UPDATE_ITEM',index:res.data.index,newValue:res.data.value})
            console.log("update sucessfully!")
            // sau khi cap nhat danh sach cau tra loi thi them chi so cau do vao mang
            var numberQuestion = res.data.number;
            console.log("numberQuestion" + numberQuestion );
            dispatch({type:'PUSH_INDEX_TO_ARRAY',index:numberQuestion}) // anh huong den mang indexArray, luc nay indexArray co them 1 phan tu moi la so thu tu cua cau hoi hien tai
            // luc nay thi mang array va indexArray van chua cap nhat cau hoi ma ban vua tra loi vao ca 2 mang
            // vi du chon cau 1, 2, 3 thi 2 mang chi chua dap an va index cua cau 1 va 2
          }
        })
        .catch((err)=>console.log(err))
      }
    render(){
        return(
            <div>
                <h2>Part7</h2>
                <p className="para"><span className="direction-part">Directions </span>: In this part you will read a selection of texts, such as magazine and newspaper articles, letters, and advertisements. Each text is followed by several questions. Select the best answer for each question and mark the letter (A), (B), (C), or (D) on your answer sheet.</p>
                {
                    this.state.data.map((da,i)=>{
                        return  <div key={i} className="container">
                        <p className="para">{da.refer}</p>
                        <div className="toeic_ques toeic_ques_col">
                            <div className="toeic_index1">Câu {da.number}</div>
                            <div className="toeic_q_title1">{da.textQuestion}</div>
                        </div>
                        
                       <div className="wrapper-radiobuton">
                            <div className="toeic_radio toeic_col">
                            <input type="radio" name={da.number} id={da.number} value="A" onChange={this.handleRadio}/>{da.radio1} 
                            </div>
                            <div className="toeic_radio toeic_col">
                            <input type="radio" name={da.number} id={da.number}  value="B" onChange={this.handleRadio}/>{da.radio2}
                            </div>
                            <div className="toeic_radio toeic_col">
                            <input type="radio" name={da.number} id={da.number} value="C" onChange={this.handleRadio}/>{da.radio3}
                            </div>
                            <div className="toeic_radio toeic_col">
                            <input type="radio" name={da.number} id={da.number} value="D" onChange={this.handleRadio}/>{da.radio4} </div>
                        
                            </div>
                            <div className="space10 space11"></div>
                        </div>
                    })
                }
            </div>
        )
    }
    componentDidMount(){
        var {testNumber} = this.props;
        axios.post('/getPart7',{testNumber})
        .then((res)=>{
          this.state = {
              data: res.data,
              test: res.data[0].test // xem la de may de random de
          }
          this.setState(this.state)
        })
        .catch((err)=>console.log(err))
    }
}

module.exports = connect(function(state){
    return {
        array: state.array,
        indexArray: state.indexArray,
        testNumber: state.testNumber
    }
})(Part7);