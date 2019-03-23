import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link, IndexLink} from 'react-router';

class NotUserMain extends React.Component{
    constructor(props){
        super(props)
        this.state={
            readScore: 0,
            listenScore: 0, 
            isDone: "Bạn chưa làm bài thi này",
            numberDoTest:0
        }
    }
    handleButton(e){
        e.preventDefault();
        var {username} = this.props;
        if(username == null){
            alert("you have to sign in or sign up first");
        }
    }
    render(){
        var total = parseInt(this.state.listenScore) + parseInt(this.state.readScore);
        return( <div>            
                  <ul className="list_lesson_toeic">
                  <li className="even">
        <div className="to_unit_left">
            <div className="to_unit_img">
                <Link to='/De1' title="TOEIC Full Test 1">
                    <img src="https://noidung.tienganh123.com/file/luyen-thi-toeic//fulltests/full-test-2.jpg" width="118px" height="98px" alt="TOEIC Full Test 1"/>
                </Link>
            </div>
            <div className="to_unit_content">
                <div className="lng_right_top">
                    <h3 className="lng_right_tit" onClick={this.handleButton.bind(this)}><Link to="/De1" title="TOEIC Full Test 1">TOEIC Full Test 1</Link></h3>
                    <div className="lng_right_content">
                        Người học làm bài thi mô phỏng bài thi TOEIC thực tế. Bài thi chỉ có trên TiengAnh123.Com!
                    </div>
                </div>
                <div className="lng_r_info">
                    <div className="lng_r_info_item">
                        <span><img src="https://www.tienganh123.com/images/lng_icon_view.png"/></span>
                        <span>{this.state.numberDoTest}</span>
                    </div>
                </div>
            </div>
            
        </div>
                    <div className="to_unit_info_box">
            <div className="to_test_info_top">
                Tổng điểm                
                <br/><span className="to_test_info_top_score"> {total}/990</span>
            </div>
            <div className="to_test_info_middle">
                Reading<br/> <span className="to_test_info_middle_score">{this.state.readScore}</span>
            </div>
            <div className="to_test_info_middle">
                Listening<br/> <span className="to_test_info_middle_score">{this.state.listenScore}</span>
            </div>
            <div className="to_test_info_row">
                <p className="abc">{this.state.isDone}</p>
            </div>
            <div className="to_uinfo_ar_left"></div>
        </div>
        
        
        
    </li>
                </ul>    
            </div>
        )
    }
    componentDidMount(){
       axios.get('/getUserInfo')
       .then((res)=>{
        this.state={
            numberDoTest:res.data.maxValue
        }
        this.setState(this.state)
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
        numberDoTest: state.numberDoTest
    }
})(NotUserMain);



/*

<button onClick={this.handleButton.bind(this)}><Link to='/De1'> Test 1 </Link></button>
<button onClick={this.handleButton.bind(this)}><Link to='/De2'> Test 2 </Link></button>     


*/




