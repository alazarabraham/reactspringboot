import React, {Component} from 'react';

import { render } from '@testing-library/react';
import {BrowserRouter, Link,Router} from 'react-router-dom'
import {Table,Container, Button} from 'react-bootstrap';

export default class EachProgram extends Component{
    constructor(props){
        super(props);
        this.state={
            programProp:props.programs
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
                        {this.props.programProp.map((program,programId)=>{
                            return(
                                <tr key={programId}>
                                    <td>{program.programId}</td>
                                    <td><Link to={`program/${program.programId}`}>{program.programName}</Link></td>
                                    <td>{program.instructor}</td>
                                    <td>{program.semester}</td>
                                    <td>{program.level}</td>

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