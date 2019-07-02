import redux from 'redux';

var loadde3 = (state=false,action)=>{
    if(action.type == 'LOAD_DE_3') return !state;
    return state;
}
module.exports = loadde3;