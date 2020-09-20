import React, {Component} from 'react';
import axios from 'axios'
import {BrowserRouter, Link,Router} from 'react-router-dom'

export default class ProgramDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            programDetails:''
        }
    }
    componentDidMount(){
        this.getIndividualProgram();
    }
    getIndividualProgram(){
        let programid = this.props.match.params.programId
        axios.get( `http://localhost:8080/api/programs/${programid}`)
        .then(response=>{
            //setting the state to the json data, consoling it with a callback function
            this.setState({programs:response.data},()=>{
                this.setState({programDetails: response.data}, ()=> {
                    console.log(this.state)
                })
    
            }
                
                )
        })
        .catch(err=> console.log(err))
    }
  
    render(){
        return(
            <div>
                <Link to="/">Back</Link>
               <h1>Details</h1>
        <h1>{this.state.programDetails.programName}</h1>
            </div>
        )
    }
}