import redux from 'redux';
var indexArray = (state=[],action)=>{
    switch(action.type){
        case 'PUSH_INDEX_TO_ARRAY': return [...state,action.index];
        default: return state;
    }
}

module.exports = indexArray;