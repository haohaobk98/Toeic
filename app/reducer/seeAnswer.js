import redux from 'redux';
var seeAnswer = (state=false, action)=>{
    if(action.type == 'SEE_ANSWER') return !state;
    return state;
}
module.exports = seeAnswer;