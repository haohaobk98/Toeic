import redux from 'redux';

var setSignUp = (state = false,action)=>{
    if(action.type == "SignUp") return !state;
    return state;
}

module.exports = setSignUp;