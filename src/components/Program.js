import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import { render } from '@testing-library/react';
import EachProgram from './EachProgram'
import {ListGroup, ListGroupItem} from 'react-bootstrap';


class Program extends Component{
    constructor(){
        super();
        this.state = {
            programs: []
        }
    }

componentDidMount(){
this.getProgram();
}

//fetching Data method
getProgram(){
    axios.get("http://localhost:8080/api/programs")
    .then(response=>{
        //setting the state to the json data, consoling it with a callback function
        this.setState({programs:response.data},()=>{
            
            console.log(this.state)

        }
            
            )
    })
}
render(){
    const programs = this.state.programs.map((program, i)=>{
        return(
               <EachProgram key={program.programId} eachProgram={program} />
            )
    })
    return(
             <div>
                <h1>Programs</h1>
                <ListGroup striped bordered hover variant="dark">
                <ListGroup.Item >{programs}</ListGroup.Item>
              
                </ListGroup>        
                  
            </div>
    )
}
}
export default Program;