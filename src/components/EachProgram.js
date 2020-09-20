import React, {Component} from 'react';

import { render } from '@testing-library/react';
import {BrowserRouter, Link,Router} from 'react-router-dom'
import {Table} from 'react-bootstrap';

export default class EachProgram extends Component{
    constructor(props){
        super(props);
        this.state={
            eachProgram:props.eachProgram
        }
    }

  
    render(){
        return(
            <div>
                <td>{this.state.eachProgram.programId}</td>
           <Link to={`/program/${this.state.eachProgram.programId}`}>
                             {this.state.eachProgram.programName}</Link>
                       
                

            </div>
        )
    }
}