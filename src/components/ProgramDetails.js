import React, {Component} from 'react';
import axios from 'axios'
import {BrowserRouter, Link,Router} from 'react-router-dom'
import {Table,Button} from 'react-bootstrap';

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
                })
    
            }
                
                )
        })
        .catch(err=> console.log(err))
    }

    onDelete(){
        let programId = this.state.programDetails.programId;
        axios.delete(`http://localhost:8080/api/programs/${programId}`)
        .then(response=>{
            this.props.history.push("/");
        })
        .catch(error=>console.log(error))
    }
  
    render(){
        return(
            <div>
                <Link to="/">Back</Link>
               <h1>Details</h1>
               <Table>
                <thead>
                    <th>{this.state.programDetails.programName}</th>
                </thead>
                <tbody>
                    <td></td>
                </tbody>
        <Link to={`/editprogram/${this.state.programDetails.programId}`}><Button class="btn-block">Edit</Button></Link>
                
             <Button class="btn-block" onClick={this.onDelete.bind(this)}>Delete</Button>

               </Table>
            </div>
        )
    }
}