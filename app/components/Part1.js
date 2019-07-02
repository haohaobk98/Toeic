import React from 'react';
import axios from 'axios';
import Example1 from './Example1';
var {connect} = require('react-redux');
class Part1 extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      data:[{
        image: "",
        radio1: "",
        radio2: "",
        radio3: "",
        radio4: "",
        number:""
      }],
      audio:"",
      test:"",
      choose:false
    }
    this.handleRadio = this.handleRadio.bind(this);
  }
 
  handleRadio(e){
    
    var number = e.target.name;
    var index= e.target.id;
    var value = e.target.value;
    this.setState({choose: true});
    var {array,dispatch} = this.props;
    // sau khi thuc hien dispatch thi chua lam anh huong den testnumber, phai lan thu 2 kich hoat su kien thi moi thuc su tac dong den.
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
        //for(var i=0; i<array.length; i++) console.log(i + "+" + array[i].value + "+" + array[i].index);
       // console.log("indexArray answer after click: "+ indexArray);
      }
    })
    .catch((err)=>console.log(err))
  }
  
  render(){
    var {colorAnswer} = this.props;
    var class1 = colorAnswer == false? "no": "yes"
    return (
      <div>
        <h1>LISTENING TEST</h1>
        <p className="para">In the Listening test, you will be asked to demonstrate how well you understand spoken English. The entire Listening test will last approximately 45 minutes. There are four parts, and directions are given for each part. You must mark your answers on the separate answer sheet. Do not write your answers in your test book.</p>
        <audio controls key={this.state.audio}>
                    <source src={this.state.audio} type="audio/mpeg"/>
        </audio><br/>
        <h2>Part1: </h2>
        <p className="para"> <span className="direction-part">Directions </span>: For each question in this part, you will hear four statements about a picture in your test book. When you hear the statements, you must select the one statement that best describes what you see in the picture. Then find the number of the question on your answer sheet and mark your answer. The statements will not be printed in your test book and will be spoken only one time.</p>
        <Example1/>
      
         {this.state.data.map((da,i)=>{
              return <div key={i} className="basic_box">
                        <div className="toeic_index">
                          Câu {da.number}
                        </div>
                        
                      <div className="image-center">
                        <img src={da.image} height="300" width="300" alt="picture1" /><br/>
                        </div>
                        <div className="radio-wrapper">
                        <div className="radio-input radio1" id={class1}>
                        <input type="radio" name={da.number} id={da.number}  value="A" onChange={this.handleRadio}/>{da.radio1}
                        </div>
                        <div className="radio-input" id={class1}>
                        <input type="radio"  name={da.number} id={da.number} value="B" onChange={this.handleRadio}/>{da.radio2}
                        </div>
                        <div className="radio-input" id={class1}>
                        <input type="radio"  name={da.number} id={da.number} value="C" onChange={this.handleRadio}/>{da.radio3}
                        </div>
                        <div className="radio-input" id={class1} >
                        <input type="radio"  name={da.number} id={da.number} value="D" onChange={this.handleRadio}/>{da.radio4}
                        </div>
                        </div>
                      </div>
         })}
      </div>
    )
  }
  componentDidMount(){
    var {testNumber} = this.props;
    axios.post("/getPart1",{testNumber})
    .then((res)=>{
      this.state={
        data: res.data,
        audio: res.data[0].audio,
        test: res.data[0].test
    }
   
     this.setState(this.state)
    })
    .catch((err)=> console.log(err))
  }
}

module.exports = connect(function(state){
  return { array: state.array,
          indexArray: state.indexArray,
          testNumber: state.testNumber,
          colorAnswer: state.colorAnswer
        }
})(Part1);

