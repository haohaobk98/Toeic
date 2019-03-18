import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {connect} from 'react-redux';
var Header = require('./Header');
import {Link, IndexLink} from 'react-router';

class Container extends React.Component{
    handleButton(e){
        e.preventDefault();
        var {username} = this.props;
        if(username == null){
            alert("you have to sign in or sign up first");
        }
    }
    render(){
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
                        <span>55395</span>
                    </div>
                </div>
            </div>
            
        </div>
                    <div className="to_unit_info_box">
            <div className="to_test_info_top">
                Tổng điểm                
                <br/><span className="to_test_info_top_score"> 0/990</span>
            </div>
            <div className="to_test_info_middle">
                Reading<br/> <span className="to_test_info_middle_score">0</span>
            </div>
            <div className="to_test_info_middle">
                Listening<br/> <span className="to_test_info_middle_score">0</span>
            </div>
            <div className="to_test_info_row">
                <p className="abc">Bạn chưa làm bài test này</p>
            </div>
            <div className="to_uinfo_ar_left"></div>
        </div>
        
        
        
    </li>
                </ul>    
            </div>
        )
    }
    componentDidMount(){
       
    }
}

module.exports = connect(function(state){
    return {
        username: state.username,
        readScore: state.readScore,
        listenScore: state.listenScore, 
        submited: state.submited
    }
})(Container);



/*

<button onClick={this.handleButton.bind(this)}><Link to='/De1'> Test 1 </Link></button>
<button onClick={this.handleButton.bind(this)}><Link to='/De2'> Test 2 </Link></button>     


*/




