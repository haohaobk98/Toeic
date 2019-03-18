import redux from 'redux';
var numberDoTest = (state=0,action)=>{
    if(action.type == 'GET_NUMBWR_DO_TEST') return action.number;
    return state;
}
module.exports = numberDoTest;