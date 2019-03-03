import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
class Part2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [
                {
                   textQuestion:"",
                   radio1: "",
                   radio2: "",
                   radio3: "",
                   radio4: ""
                }
            ]

        }
    }
    render(){
        return(
            <div>
                <h2>Part2</h2>
                {
                    this.state.data.map((da,i)=>{
                        return  <div>
                                <div key={da._id}>
                                     <p>{da.textQuestion}</p>
                                    <input type="radio" name={i} value="A"/>{da.radio1} <br/>
                                    <input type="radio" name={i} value="B"/>{da.radio2}<br/>
                                    <input type="radio" name={i} value="C"/>{da.radio3} <br/>
                                </div>
                                </div>
                    })
                }
            </div>
        )
    }
    componentDidMount(){
        axios.get('/getPart2')
        .then((res)=>{
           // console.log(res.data)
            this.setState({data: res.data})
            //console.log(this.state.data)
        })
        .catch((err)=>console.log(err))
    }

}

module.exports = Part2;