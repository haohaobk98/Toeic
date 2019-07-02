import redux from 'redux';

var loadde2 = (state=false,action)=>{
    if(action.type == 'LOAD_DE_2') return !state;
    return state;
}
module.exports = loadde2;