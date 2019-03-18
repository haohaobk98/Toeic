import redux from 'redux';
var isDone = (state="Bạn chưa làm bài thi này",action)=>{
    if(action.type == 'GET_IS_DONE') return action.msg;
    return state;
}
module.exports = isDone;