import redux from 'redux';

var loadde5 = (state=false,action)=>{
    if(action.type == 'LOAD_DE_5') return !state;
    return state;
}
module.exports = loadde5;