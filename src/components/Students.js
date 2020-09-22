import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import { render } from '@testing-library/react';
import EachStudent from './EachStudent'
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import ProgramDetails from './ProgramDetails';


class Students extends Component{
    constructor(){
        super();
        this.state = {
            students: []

        }
    }

componentDidMount(){
this.getStudent();
}

//fetching Data method
getStudent(){
    axios.get("http://localhost:8080/api/students")
    .then(response=>{
        //setting the state to the json data, consoling it with a callback function
        this.setState({students:response.data},()=>{
            

        }
            
            )
    })
}
render(){
    const students = this.state.students
        return(
               <EachStudent  studentProp={students} />

            )
        }
}
export default Students;