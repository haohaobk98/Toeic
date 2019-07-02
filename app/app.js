var React = require('react');
var ReactDOM = require('react-dom');
var Part1 = require('./components/Part1');
var {Provider} =  require('react-redux'); 
var store = require('./store')
var {Router, Route, IndexRoute, hashHistory} = require('react-router');
var Main = require('./components/Main');
var Homepage = require('./components/Homepage');
var SignIn = require('./components/SignIn');
var SignUp = require('./components/SignUp');
var Timer = require('./components/Timer');
function requireUser(nextState,replace,next){
  if(store.getState().username == null){
      replace('/');
  }
  next();
}
ReactDOM.render(
  <Provider store={store}>
   <Router history={hashHistory}>
      <Router path="/" component={Main}>
        <IndexRoute component={Homepage}/>
        <Route path="signin" component={SignIn}/>
        <Route path="signup" component={SignUp}/>
        <Route path="De1" component={Timer} onEnter={requireUser}/>
        <Route path="De2" component={Timer} onEnter={requireUser}/>
        <Route path="De3" component={Timer} onEnter={requireUser}/>
        <Route path="De4" component={Timer} onEnter={requireUser}/>
        <Route path="De5" component={Timer} onEnter={requireUser}/>
        <Route path="De6" component={Timer} onEnter={requireUser}/>
      </Router>
   </Router>
  </Provider>,
  document.getElementById('root')
);

/*
      <Router history={hashHistory}>
    <Router path="/" component={Main}>
    <IndexRoute component={Homepage}/>
    <Route path="signin" component={SignIn}/>
    <Route path="signup" component={SignUp}/>
    </Router>
    </Router>
 
 */