import redux from 'redux';
var addpart = (state=false,action)=>{
    if(action.type == 'ADD_PART') return !state;
    return state;
}

module.exports = addpart;