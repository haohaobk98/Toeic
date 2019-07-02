var redux = require('redux');
var STT = (state=0,action)=>{
    if(action.type == 'INCREASE') {
        var num = parseInt(state);
        num++;
        return num;
    }
    return state;
}

module.exports = STT;