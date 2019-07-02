import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {connect} from 'react-redux';
class Part2 extends Component{
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
                   number: ""
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
                <h2>Part2</h2>
                <p className="para"><span className="direction-part">Directions </span>: You will hear a question or statement and three responses spoken in English. They will not be printed in your test book and will be spoken only one time. Select the best response to the question or statement and mark the letter (A), (B), or (C) on your answer sheet.</p>
                {
                    this.state.data.map((da,i)=>{
                        return  <div key={i} className="basic_box">
                        <div className="toeic_index">
                          Câu {da.number}
                        </div>
                        <div className="radio-wrapper">
                        <div className="radio-input radio1">
                        <input type="radio" name={da.number} id={da.number} value="A" onChange={this.handleRadio}/>{da.radio1}
                        </div>
                        <div className="radio-input">
                        <input type="radio" name={da.number} id={da.number} value="B" onChange={this.handleRadio}/>{da.radio2}
                        </div>
                        <div className="radio-input">
                        <input type="radio" name={da.number} id={da.number} value="C" onChange={this.handleRadio}/>{da.radio3}
                        </div>
                      </div>
      </div>
                    })
                }
            </div>
        )
    }
    componentDidMount(){
        var {testNumber} = this.props;
        axios.post('/getPart2',{testNumber})
        .then((res)=>{
          this.state = {
              data: res.data,
              test: res.data[0].test
          }
          this.setState(this.state)
        })
        .catch((err)=>console.log(err))
    }

}

module.exports = connect(function(state){
    return { array: state.array,
            indexArray: state.indexArray,
            testNumber: state.testNumber        
        }
  })(Part2);
  
  