import redux from 'redux';

var listenScore = (state=0,action)=>{
    if(action.type == 'GET_LISTEN_SCORE') {
        return action.score;
    }
    return state;
}

module.exports = listenScore;

