var redux = require('redux');
import reducer from './reducer/reducer';

var store = redux.createStore(reducer)

module.exports = store;