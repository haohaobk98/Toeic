import redux from 'redux';
var submited = (state=false,action)=>{
    if(action.type == 'SUBMITED') {
        return !state;
    }
    return state;
}

module.exports = submited;