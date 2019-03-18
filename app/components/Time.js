import React from 'react';
import ReactDOM from 'react-dom';
 class Time extends React.Component{

     render(){
         return(
             <div>
                 <h1>
                     {this.props.minute} : {this.props.second}
                 </h1>
             </div>
         )
     }
 }

 module.exports = Time;