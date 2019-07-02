import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
class Picture extends React.Component{
    _isMounted = false;
    constructor(props){
        super(props)
        this.state = {
            image: 1
        }
        this.changeState = this.changeState.bind(this);
    }
    changeState(){
        
        this.state = {
            image: (this.state.image) % 3+1
        }
        this.setState(this.state)
    }
    render(){
        return(
            <div>
                <img className="image-title" src={"image/"+this.state.image+".png"}  />
            </div>
        )
    }
    componentDidMount(){
        this._isMounted = true;
        setInterval(this.changeState,4000);
    }
    componentWillUnmount() {
        this._isMounted = false;
      }
    
}

module.exports = connect(function(state){
    return{
        changeImage: state.changeImage
    }
})(Picture);

