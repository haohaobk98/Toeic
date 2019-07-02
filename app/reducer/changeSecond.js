import redux from 'redux';

var changeSecond = (state=0,action)=>{
    if(action.type == 'CHANGE_SECOND') return action.second;
    return state;
}

module.exports = changeSecond;