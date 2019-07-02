import React from 'react';
import ReactDOM from 'react-dom';
 class Time extends React.Component{

     render(){
         return(
             <div>
                 <img src="http://icons.iconarchive.com/icons/martz90/circle/256/timer-icon.png" className="img-timer" />
                 <h1>
                     {this.props.minute} : {this.props.second}
                 </h1>
             </div>
         )
     }
 }

 module.exports = Time;