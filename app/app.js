var React = require('react');
var ReactDOM = require('react-dom');
var Part1 = require('./components/Part1');
var {Provider} =  require('react-redux'); 
var store = require('./store')
ReactDOM.render(
  <Provider store={store}>
    <Part1/>
    </Provider>,
  document.getElementById('root')
);
