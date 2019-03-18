
import redux from 'redux';
var testNumber = (state=null,action)=>{
    switch(action.type){
        case 'GET_TEST_NUMBER': return action.number;
        default: return state;
    }
}

module.exports = testNumber;