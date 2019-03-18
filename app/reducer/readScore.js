import redux from 'redux';

var readScore = (state=0,action)=>{
    if(action.type == 'GET_READ_SCORE') {
        return action.score;
    }
   
    return state;
}

module.exports = readScore;