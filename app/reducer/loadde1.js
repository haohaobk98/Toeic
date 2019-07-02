import redux from 'redux';

var loadde1 = (state=false,action)=>{
    if(action.type == 'LOAD_DE_1') return !state;
    return state;
}
module.exports = loadde1;