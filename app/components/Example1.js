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
             <div className="basic_box">
             <div className="toeic_index">
             {this.state.data.number}
              </div >
                 <div className="image-center example">
                 <img src={this.state.data.image} height="300" width="300" alt="picture1" /><br/>
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