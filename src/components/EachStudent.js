import React, {Component} from 'react';

import { render } from '@testing-library/react';
import {BrowserRouter, Link,Router} from 'react-router-dom'
import {Table,Container, Button} from 'react-bootstrap';

export default class EachStudent extends Component{
    constructor(props){
        super(props);
        this.state={
            studentProp:props.students
        }
    }

  
    render(){
        return(
            <div>
                <Container>
                     <Table striped bordered hover>
                    <thead>
                        <th>Program Id</th>
                        <th>Program Name</th>
                        <th>Instructor</th>
                        <th>Semester </th>
                        <th>Level</th>
                    </thead>
                    <tbody>
                        {this.props.studentProp.map((student,studentId)=>{
                            return(
                                <tr key={studentId}>
                                    <td>{student.studentId}</td>
                                    <td><Link to={`student/${student.studentId}`}>{student.firstname}</Link></td>
                                    <td>{student.lastname}</td>
                                    <td>{student.degreeProgram}</td>
                                    <td>{student.dob}</td>

                                </tr>
                            )
                        })}
                    </tbody>

                </Table>
                <Link to={"/addstudent"}><Button>Add Student</Button></Link>

           
                       
                </Container>
               
                

            </div>
        )
    }
}