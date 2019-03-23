import React from 'react';
import axios from 'axios';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';
import Part5 from './Part5';
import Part6 from './Part6';
import Part7 from './Part7';
import Part1 from './Part1';
import {connect} from 'react-redux';
class AllPart extends React.Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    var{array,indexArray,testNumber,dispatch,numberDoTest} = this.props;
    console.log(numberDoTest);
    // up to here thi mang array chua cac cau tra loi ra dung
    // mang index array thi thieu cau tra loi ma ban vua lam, chon cau 1 va 200 and submit thi mang chi co moi 1
    console.log(testNumber);
    console.log("indexArray while submit " + indexArray);
    axios.post('/submit',{array,indexArray,testNumber,numberDoTest})
    .then((res)=>{
      if(res.data.title == "NOT_DONE"){
        console.log("Ban chua hoan thanh bai thi!");
      }else{
        dispatch({type:'SUBMITED'})
       dispatch({type:'GET_LISTEN_SCORE',score:res.data.listeningScore})
        dispatch({type:'GET_READ_SCORE',score:res.data.readingScore})
        dispatch({type:'GET_BXH',bxh:res.data.BXH})
        
      }
    })
    .catch((err)=>console.log(err))
    
  }
  
  render(){
      var {submited, readScore, listenScore,BXH} = this.props;
      var total = parseInt(readScore)+ parseInt(listenScore)
      if(submited){
        return(
            <div>
                <h2>Your listening score is: {listenScore}</h2>
                <h2>Your reading score is: {readScore}</h2>
                <h2>Total: {total}</h2>
               <div>
                 <h2>Bang xep hang</h2>
               <table>
                      <tr>
                          <th>username</th>
                          <th>Score</th>
                      </tr>
                      {
                    BXH.map((e,i)=>{
                      return <tr key={i}>
                        <td>{e.username} </td>
                        <td>{e.score}</td>
                      </tr>
                    })
              }
                    </table>
               </div>
              
            </div>
        )
      }
      else{
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                {/* <Timer /> */}
               <div className="clear_part"> <Part1 /></div>
               <div className="clear_part"> <Part2 /></div>
               <div className="clear_part"><Part3/></div>
               <div className="clear_part"> <Part6 /></div>
               <div></div>
               <div></div>
               <div></div>
               
               
               
            <button className="button">Submit</button>
            </form>
            </div>
                 )
           }
  }
}

module.exports = connect(function(state){
  return { array: state.array,
          indexArray: state.indexArray,
          testNumber: state.testNumber,
          readScore: state.readScore,
          listenScore: state.listenScore, 
          submited: state.submited,
          username: state.username,
          BXH: state.BXH,
          numberDoTest: state.numberDoTest
        }
})(AllPart);

