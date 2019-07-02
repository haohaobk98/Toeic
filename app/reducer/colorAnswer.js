import redux from 'redux';
var colorAnswer = (state=false,action)=>{
if(action.type == 'COLOR_ANSWER') return !state;
return state;
}

module.exports = colorAnswer;