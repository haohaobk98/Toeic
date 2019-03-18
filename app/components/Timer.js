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
             minute: '01',
             started: false
         }
         this.secondsRemaining; 
         this.intervalHandle;
          this.startCountDown = this.startCountDown.bind(this);
         this.tick = this.tick.bind(this);
        
     }
     tick() {

      var {submited,indexArray,array,testNumber,dispatch,readScore,listenScore} = this.props;
      if(submited)  clearInterval(this.intervalHandle);
        var min = Math.floor(this.secondsRemaining / 60);
        var sec = this.secondsRemaining - (min * 60);
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
          axios.post('./submit',{array,indexArray,testNumber})
          .then((res)=>{
            console.log(res.data.BXH.length)
            dispatch({type:'SUBMITED'});
            dispatch({type:'GET_LISTEN_SCORE',score:res.data.listeningScore})
            dispatch({type:'GET_READ_SCORE',score:res.data.readingScore})
            dispatch({type:'GET_BXH',bxh:res.data.BXH})
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
             {html}
               <AllPart/>
          </div>
      )
       }else{
        return(
          <div>
              <Time  minute={this.state.minute} second={this.state.second} />
               <button onClick={this.startCountDown}>Start</button> 
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
   }
 })(Timer);