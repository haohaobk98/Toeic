import redux from 'redux';

var changeImage = (state=1,action)=>{
    if(action.type == "CHANGE_IMAGE"){
        var x = state;
        return parseInt(x) % 3+1;
    }
    return state;
}
module.exports = changeImage;