import redux from 'redux';
function sort(a,b){
    return (a.index > b.index)?1:(a.index < b.index)?-1:0;
}
function swap(a,b){
    [a,b] = [b,a];
}
var AnswerArray = [];
for(var i=0; i<200; i++){
    AnswerArray.push({
        value: 'a',
        index: i+1
    })
}

var array = (state=AnswerArray,action)=>{
    switch(action.type){
        case 'ADD_ITEM': return [...state,{value:action.item,index:action.index}];
        case 'UPDATE_ITEM': {
            var index = action.index;
            return state.map((item)=>(
                item.index == index?{...item,value:action.newValue}:item
            ))
        }
        case 'SORT_ITEM': {
            var newState = state;
            for(var i=0; i< newState.length-1; i++){
                for(var j=i+1; j< newState.length; j++){
                   if( sort(newState[i],newState[j]) == 1){
                       swap(newState[i],newState[j]);
                   }
                }
            }
            return newState;
        }
        default: return state;
    }
}

module.exports = array;