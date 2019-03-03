var redux = require('redux');
import array from './array';
import indexArray from './indexArray';
var reducer = redux.combineReducers({
    array: array,
    indexArray: indexArray
});

module.exports = reducer;