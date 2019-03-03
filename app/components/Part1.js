import React from 'react';
import axios from 'axios';
import Part2 from './Part2';
import Part3 from './Part3';
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
    }
  }
  handleSubmit(e){
    e.preventDefault();
    var{array,indexArray} = this.props;
    console.log(array);
    console.log(indexArray);
    axios.post('/submit',{array,indexArray})
    .then((res)=>{

    })
    .catch((err)=>console.log(err))
    
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
        dispatch({type:'SORT_ITEM'});
        console.log("sort sucessfully")
      }
      else if(res.data.title == "ADD"){
       console.log("add");
       var numberQuestion = res.data.number;
       dispatch({type:'PUSH_INDEX_TO_ARRAY',index:numberQuestion}) // anh huong den mang indexArray, luc nay indexArray co them 1 phan tu moi la so thu tu cua cau hoi hien tai
       
       
       axios.post('/checkIndex',{indexArray,currentIndex: numberQuestion})
       .then((res1)=>{
        // console.log(res1.data.array)
        console.log(res1.data.array.length)
          for(var i=0; i<res1.data.array.length; i++){
            console.log(res1.data.array[i])
            dispatch({type:'PUSH_INDEX_TO_ARRAY',index:res1.data.array[i].index})
            dispatch({type:'ADD_ITEM',item:res1.data.array[i].value,index:res1.data.array[i].index})  
          }  
          dispatch({type:'ADD_ITEM',item:res.data.value,index:res.data.index})
          console.log(array)
          dispatch({type:'SORT_ITEM'});
          console.log("sort sucessfully")
       })
       .catch((err)=>console.log(err))
       
        // can duoc sap xep lai mang
        
      }
    })
    .catch((err)=>console.log(err))
  }
  
  render(){
    return (
      <div>
        <audio controls key={this.state.audio}>
                    <source src={this.state.audio} type="audio/mpeg"/>
        </audio><br/>
        <Example1/>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <h2>Part1: </h2>
         {this.state.data.map((da,i)=>{
              return <div key={da._id}>
                        <p>{da.number}.</p>
                        <img src={da.image} height="200" width="200" alt="picture1" /><br/>
                        <input type="radio" name={da.number} id={da.number} value="A" onChange={this.handleRadio.bind(this)}/>{da.radio1} <br/>
                        <input type="radio" name={da.number} id={da.number} value="B" onChange={this.handleRadio.bind(this)}/>{da.radio2}<br/>
                        <input type="radio" name={da.number} id={da.number} value="C" onChange={this.handleRadio.bind(this)}/>{da.radio3} <br/>
                        <input type="radio" name={da.number} id={da.number} value="D" onChange={this.handleRadio.bind(this)}/>{da.radio4} <br/>
                      </div>
         })}
       <button className="button">Submit</button>
       </form>
      </div>
    )
  }
  componentDidMount(){
    axios.get("/getPart1")
    .then((res)=>{
      this.state={
        data: res.data,
        audio: res.data[0].audio

    }
     this.setState(this.state)
    })
    .catch((err)=> console.log(err))
  }
}

module.exports = connect(function(state){
  return { array: state.array,
          indexArray: state.indexArray}
})(Part1);

