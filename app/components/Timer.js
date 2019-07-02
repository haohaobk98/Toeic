import React from 'react';
import ReactDOM from 'react-dom';
import Time from './Time';
import AllPart from './AllPart';
import Container from './Container';
import Part1 from'./Part1';
import {connect} from 'react-redux';
import axios from 'axios';
 class Timer extends React.Component{
     constructor(props){
         super(props)
         this.state = {
             second: '00',
             minute: '10',
             started: false
         }
         this.secondsRemaining; 
         this.intervalHandle;
          this.startCountDown = this.startCountDown.bind(this);
         this.tick = this.tick.bind(this);
        
     }
     tick() {
      var {dispatch} = this.props;
      var {submited,indexArray,array,testNumber,dispatch,numberDoTest} = this.props;
      if(submited)  clearInterval(this.intervalHandle);
        var min = Math.floor(this.secondsRemaining / 60);
        var sec = this.secondsRemaining - (min * 60);
      dispatch({type:'CHANGE_MINUTE',minute: (119 - parseInt(min))});
      dispatch({type:'CHANGE_SECOND',second: (60 - parseInt(sec))});
        this.setState({
          minute: min,
          second: sec
        })
        if (sec < 10) {
          this.setState({
            second: "0" + this.state.second,
          })
        }
        if (min < 10) {
        this.setState({
          minute: "0" + min,
         })
        }
        if (min === 0 & sec === 30) {
         clearInterval(this.intervalHandle);
        alert("het time!")
          axios.post('./submit',{array,indexArray,testNumber,numberDoTest})
          .then((res)=>{
            dispatch({type:'SUBMITED'});
            dispatch({type:'GET_LISTEN_SCORE',score:res.data.listeningScore})
            dispatch({type:'GET_READ_SCORE',score:res.data.readingScore})
          })
          .catch((err)=>console.log(err))
        }
        this.secondsRemaining--
        }
      
        startCountDown() {
            this.intervalHandle = setInterval(this.tick, 1000);
            let time = this.state.minute;
            this.secondsRemaining = time * 60;
            this.setState({started: true});
            }

     render(){
       var {submited} = this.props;
       var html = submited == false?  <Time  minute={this.state.minute} second={this.state.second} /> : null;
       if(this.state.started){
        return(
          <div>
            <div className="text-center">
            
            {html}
            </div>
               <AllPart/>
          </div>
      )
       }else{
        return(
          <div>
            <div className="text-center">
            <Time  minute={this.state.minute} second={this.state.second} />  
            </div>
           
    <div className="comment_bai_hoc clear">  
        <div className="ghichu0 clear bo_goc">
        <h1 className="title_lesson">TOEIC Full Test 1</h1>
    </div>
    </div>
    <br></br>

    <div className="details">
        <span id="fulltest"></span>

 <div className="toeic_box_start">
 <h2 className="gthieu">Người học làm bài thi mô phỏng bài thi TOEIC thực tế. Bài thi chỉ có trên TiengAnh123.Com!</h2>
     <div className="toeic_title">Full Test 1</div>
    <div className="toeic_content_start">Chào mừng các bạn đến với đề thi thử TOEIC trong chương trình Luyện thi TOEIC online của TiếngAnh123.Com! Đây là bài thi mô phỏng dạng đề thi TOEIC thực tế do đội ngũ giáo viên của TiếngAnh123.Com kì công biên soạn. Bài làm của các bạn sẽ được chấm điểm và thông báo kết quả ngay sau khi các bạn nộp bài.</div>
    <div className="space20"></div>
    <div className="click_start">Bạn hãy click vào nút Start bên dưới để bắt đầu làm bài. Chúc các bạn đạt điểm số thật cao!</div>
    <div className="space20"></div>
    <button type="button" id="toeic_start" onClick={this.startCountDown}></button>
 </div>

      </div>
      </div>
      )
       }
         
     }

 }

 module.exports = connect(function(state){
   return {
     submited: state.submited,
     indexArray: state.indexArray,
     testNumber: state.testNumber,
     readScore: state.readScore,
     listenScore: state.listenScore, 
     array: state.array,
     numberDoTest: state.numberDoTest,
     changeMinute: state.changeMinute,
     changeSecond: state.changeSecond
   }
 })(Timer);