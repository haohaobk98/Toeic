import React from 'react';
import axios from 'axios';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';
import Part5 from './Part5';
import Part6 from './Part6';
import Part7 from './Part7';
import Part1 from './Part1';
import AnswerArray from './AnswerArray';
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
        dispatch({type:'SUBMITED'})
       dispatch({type:'GET_LISTEN_SCORE',score:res.data.listeningScore})
        dispatch({type:'GET_READ_SCORE',score:res.data.readingScore})
        dispatch({type:'GET_BXH',bxh:res.data.BXH})
        dispatch({type:'COLOR_ANSWER'});
        
    })
    .catch((err)=>console.log(err))
    
  }
  handleSave(e){
    var{listenScore,readScore,testNumber} = this.props;
    e.preventDefault();
    axios.post('/saveGrade',{listenScore,readScore,testNumber})
    .then((res)=>{
      if(res.data.title == 'UPDATE'){
        alert("Lưu thành công!")
      }
    })
    .catch((err)=>console.log(err))
  }
  handleAnswer(e){
    e.preventDefault();
    var {dispatch,seeAnswer} = this.props;
    dispatch({type:'SEE_ANSWER'}); 
  }
  render(){
      var {seeAnswer,submited, readScore, listenScore, changeMinute, changeSecond} = this.props;
      var total = parseInt(readScore)+ parseInt(listenScore)
      var answer = seeAnswer == false? null :<AnswerArray />
      if(submited){
        return(<div>
          <div className="toda_box" >
          <div className="toeic_result toda_ketqua_box" >
            <div className="toda_ketqua_title">Kết quả bài thi</div>
            <div className="toda_ketqua_content">
              <div className="toda_ketqua_ct_left">
                <div className="toda_left_row">
                  <div className="toda_left_row_l">Điểm thi phần nghe :</div>
                  <div className="toda_left_row_r toeic_dl">{listenScore}</div>
                </div>
                <div className="toda_left_row">
                  <div className="toda_left_row_l">Điểm thi phần đọc :</div>
                  <div className="toda_left_row_r toeic_dr">{readScore}</div>
                </div>
                <div className="toda_left_row">
                  <div className="toda_left_row_l">Điểm bài thi :</div>
                  <div className="toda_left_row_r toeic_dt">{total}</div>
                </div>
                <div className="toda_left_row">
                  <div className="toda_left_row_l">Thời gian làm bài :</div>
                  <div className="toda_left_row_r toeic_t">{changeMinute} : {changeSecond}</div>
                </div>
              </div>
              <div className="toda_ketqua_ct_right">
                <div className="toda_bt_save" onClick={this.handleSave.bind(this)} >Lưu điểm</div>
                <div className="toda_bt_save toda_bt_view" onClick={this.handleAnswer.bind(this)}>Xem đáp án</div>
                <div className="loading"></div>
              </div>
            </div>
          
          </div> 
          <div className="answer-detail">
          {answer}
            </div> 
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
               <div className="clear_part"> <Part4 /></div>
               <div className="clear_part"> <Part5 /></div>
               <div className="clear_part"> <Part6 /></div>
               <div className="clear_part"> <Part7 /></div>  
            <button className="button button-submit">Submit</button>
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
          numberDoTest: state.numberDoTest,
          seeAnswer: state.seeAnswer,
          changeMinute: state.changeMinute,
          changeSecond: state.changeSecond
        }
})(AllPart);

