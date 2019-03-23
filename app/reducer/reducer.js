var redux = require('redux');
import array from './array';
import indexArray from './indexArray';
import username from './username';
import notification from './notification';
import testNumber from './testNumber';
import listenScore from './listenScore';
import readScore from './readScore';
import submited from './submited';
import BXH from './BXH';
import numberDoTest from './numberDoTest';
import isDone from './isDone';
import setSignIn from './setSignIn';
import setSignUp from './setSignUp';
var reducer = redux.combineReducers({
    array,
    indexArray,
    username,
    notification,
    testNumber,
    listenScore,
    readScore,
    submited,
    BXH,
    numberDoTest,
    isDone,
    setSignIn,
    setSignUp
});

module.exports = reducer;