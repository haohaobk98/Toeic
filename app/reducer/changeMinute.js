import redux from 'redux';

var changeMinute = (state=0,action)=>{
    if(action.type == 'CHANGE_MINUTE') return action.minute;
    return state;
}

module.exports = changeMinute;