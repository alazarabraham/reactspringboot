import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import { render } from '@testing-library/react';
import EachProgram from './EachProgram'
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import ProgramDetails from './ProgramDetails';


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
            

        }
            
            )
    })
}
render(){
    const programs = this.state.programs
        return(
               <EachProgram  eachProgram={programs} />

            )
        }
}
export default Program;