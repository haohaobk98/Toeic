import redux from 'redux';

var setSignIn = (state = false,action)=>{
    if(action.type == "OPEN") return !state;
    return state;
}

module.exports = setSignIn;
// bay gio se tao 1 state la setsignin 
// neu khi click vao signin thi se set lai setsignin = true, va khi do se kich hoat dialog 
// thiet lap thuoc tinh visible trong Modal o signin form