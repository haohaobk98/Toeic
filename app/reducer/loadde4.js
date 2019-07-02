import redux from 'redux';

var loadde4 = (state=false,action)=>{
    if(action.type == 'LOAD_DE_4') return !state;
    return state;
}
module.exports = loadde4;