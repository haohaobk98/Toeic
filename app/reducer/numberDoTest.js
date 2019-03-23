import redux from 'redux';
var numberDoTest = (state=0,action)=>{
    if(action.type == 'GET_NUMBER_DO_TEST'){
        return action.value;
    };
    return state;
}
module.exports = numberDoTest;

// dang sai o cho load trang khong user ban dau
// gia tri numberdotest = nan