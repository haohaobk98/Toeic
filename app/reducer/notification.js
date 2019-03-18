import redux from 'redux';

var notification = (state=false,action)=>{
    switch(action.type){
        case 'SHOW_NOTI': return action.msg;
        case 'HIDE_NOTI': return null;
        default: return state;
    }
    
}

module.exports = notification;