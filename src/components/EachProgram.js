import React, {Component} from 'react';

import { render } from '@testing-library/react';
import {BrowserRouter, Link,Router} from 'react-router-dom'
import {Table} from 'react-bootstrap';

export default class EachProgram extends Component{
    constructor(props){
        super(props);
        this.state={
            eachProgram:props.programs
        }
    }

  
    render(){
        console.log(this.props.eachProgram)
        return(
            <div>
                <Table striped bordered hover>
                    <thead>
                        <th>Program Id</th>
                        <th>Program Name</th>
                    </thead>
                    <tbody>
                        {this.props.eachProgram.map((program,programId)=>{
                            return(
                                <tr key={programId}>
                                    <td>{program.programId}</td>
                                    <td><Link to={`program/${program.programId}`}>{program.programName}</Link></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
           
                       
                

            </div>
        )
    }
}