import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
class Example1 extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [
                {    
                    image : "",
                    number: "",
                    answer : "",
                    part : ""
                }
            ],
            audio : "",
            

        }
    }
    render(){
        return(
            <div>  
                            <div >
                                <p>{this.state.data.number}</p>
                                <img src={this.state.data.image} height="200" width="200" alt="picture1" /><br/>
                             </div>
                        
            </div>
        )
    }
    componentDidMount(){
        axios.get('/getExample1')
        .then((res)=>{
            
            this.setState({data: res.data})
           
        })
        .catch((err)=>console.log(err))
    }

}

module.exports = Example1;