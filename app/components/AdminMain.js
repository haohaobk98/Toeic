import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link, IndexLink} from 'react-router';

class AdminMain extends React.Component{
    constructor(props){
        super(props)
        this.state={
           arrayInfo:[]
        }
    }
    handleButton(e){
        var temp = e.target.href;
        var test = temp.substring(temp.length-3);
        alert(test);
        var {dispatch} = this.props;
        dispatch({type:'GET_TEST_NUMBER',number:test});
        e.preventDefault();
        axios.post('/numberDoTest',{testNumber:test})
        .then((res)=>{
            dispatch({type:'GET_NUMBER_DO_TEST',value: res.data.maxValue});
        })
        .catch((err)=>console.log(err))
       
    }
    handleDelete(e){
        e.preventDefault();
        var temp = e.target.href;
        var test = temp.substring(temp.length-3);
        console.log(test);
        axios.post("/deleteTest",{testNumber:test})
        .then((res)=>{
            if(res.data.title == "DELETE") alert("Delete successfully");
        })
        .catch((err)=>console.log(err))
    }
    addPart(e){
        e.preventDefault();
        var {dispatch} = this.props;
        dispatch({type:'ADD_PART'})
    }
    render(){     
            return(
                <div>
                {
                    this.state.arrayInfo.map((e,i)=>{
                       return <div key={i}>                      
                        <ul className="list_lesson_toeic">
                        <li className="even">
              <div className="to_unit_left">
                  <div className="to_unit_img">
                      <Link onClick={this.handleButton.bind(this)} id='De1' to={'/De'+ i} title="TOEIC Full Test ">
                          <img src="https://noidung.tienganh123.com/file/luyen-thi-toeic//fulltests/full-test-2.jpg" width="118px" height="98px" alt="TOEIC Full Test 1"/>
                      </Link>
                  </div>
                  <div className="to_unit_content">
                      <div className="lng_right_top">
                          <h3 className="lng_right_tit" onClick={this.handleButton.bind(this)}><Link  to={'/De'+ (i+1)} title="TOEIC Full Test ">TOEIC Full Test </Link></h3>
                          <div className="lng_right_content">
                              Người học làm bài thi mô phỏng bài thi TOEIC thực tế. Bài thi chỉ có trên TiengAnh123.Com!
                          </div>
                      </div>
                      <div className="lng_r_info">
                          <div className="lng_r_info_item">
                              <span><img src="https://www.tienganh123.com/images/lng_icon_view.png"/></span>
                              <span>{e.numberDoTest}</span>
                          </div>
                      </div>
                  </div>
                  
              </div>
                <div className="BXH">
              <h3 className="text-center">Bảng xếp hạng- Top 5</h3>
            
              <table>
              <tbody>
                  <tr>
                      <th>STT</th>
                      <th>Username</th>
                      <th>Score</th>
                  </tr>
                  </tbody>
                    {
                        e.user.map((item,y)=>{
                            return(
                                <tbody key={y} >
                        
                                <tr >
                                <td>{parseInt(y)+1}</td>
                                <td>{item.username}</td>
                                <td>{item.score}</td>
                            </tr>
                    
                          </tbody>
                          )
                      })
                  }
               
              </table>
              </div>  
              <div className="deletebutton">
                  <button > <Link className="delete" onClick={this.handleDelete.bind(this)} id='De1' to={'/De'+ (i+1)}>Delete
                      </Link></button> 
              </div> 
            </li>  
                      </ul>    
                  </div>
              
                    })
                }
                <button onClick={this.addPart.bind(this)}>ADD</button>
                
            </div>
        
            )

    }
    componentDidMount(){
        axios.get("/getMain")
        .then((res)=>{
            this.state = {
                arrayInfo: res.data.result,
            }
            this.setState(this.state);
        })

        .catch((err)=>console.log(err))
    }
}

module.exports = connect(function(state){
    return {
        username: state.username,
        readScore: state.readScore,
        listenScore: state.listenScore, 
        isDone: state.isDone,
        numberDoTest: state.numberDoTest,
        testNumber: state.testNumber,
        loadde1: state.loadde1,
        loadde2: state.loadde2,
        loadde3: state.loadde3,
        loadde4: state.loadde4,
        loadde5: state.loadde5,
        addpart: state.addpart,
        STT: state.STT

    }
})(AdminMain);




