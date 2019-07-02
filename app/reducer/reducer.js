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
import seeAnswer from './seeAnswer';
import changeImage from './changeImage';
import changeMinute from './changeMinute';
import changeSecond from './changeSecond';
import colorAnswer from './colorAnswer';
import loadde1 from './loadde1';
import loadde2 from './loadde2';
import loadde3 from './loadde3';
import loadde4 from './loadde4';
import loadde5 from './loadde5';
import addpart from './addpart';
import STT from './STT';
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
    setSignUp,
    seeAnswer,
    changeImage,
    changeMinute,
    changeSecond,
    colorAnswer,
    loadde1,
    loadde2,
    loadde3,
    loadde4,
    loadde5,
    STT,
    addpart
});

module.exports = reducer;