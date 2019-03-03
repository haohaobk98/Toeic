import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
class Part3 extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [
                {    
                    image : "",
                    textQuestion: "",
                    radio1 : "",
                    radio2 : "",
                    radio3 : "",
                    radio4 : "",
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
                {this.state.audio}
                <h2>Part3</h2>
                {   
                    this.state.data.map((da,i)=>{
                        return  <div>
                            <div key={da._id}>
                                <p>{da.textQuestion}</p>
                                    <input type="radio" name={i} value="A"/>{da.radio1} <br/>
                                    <input type="radio" name={i} value="B"/>{da.radio2}<br/>
                                    <input type="radio" name={i} value="C"/>{da.radio3} <br/>
                                    <input type="radio" name={i} value="D"/>{da.radio4} <br/>
                             </div>
                        </div>
                    })
                }
            </div>
        )
    }
    componentDidMount(){
        axios.get('/getPart3')
        .then((res)=>{
           this.state={
               data: res.data,
               audio: res.data[0].audio
           }
            this.setState(this.state)
            console.log(this.state.audio)
        })
        .catch((err)=>console.log(err))
    }

}

module.exports = Part3;