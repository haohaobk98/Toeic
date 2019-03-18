import redux from 'redux';
var BXH = (state=[],action)=>{
    if(action.type == 'GET_BXH') return action.bxh;
    return state;
}

module.exports = BXH;