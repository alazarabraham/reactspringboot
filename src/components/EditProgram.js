import React, {Component} from 'react';
import axios from 'axios'
import {BrowserRouter, Link,Router} from 'react-router-dom'
import {Table,Button, Form} from 'react-bootstrap';

export default class AddProgram extends Component{
    constructor(props){
        super(props);
        this.state={
            programId:"",
            programName:""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

  componentDidMount(){
      this.getEditDetails();
  }

  getEditDetails(){
    let programId = this.props.match.params.programId;
    axios.get(`http://localhost:8080/api/programs/${programId}`)
    .then(response=>{
        console.log(response)
        this.setState({
            programId: response.data.programId,
            programName: response.data.programName
        })
    })
    .catch(error=>console.log(error))
}

    editProgram(newProgram){
        axios.request({
            method:"put",
            url:`http://localhost:8080/api/programs/${this.state.programId}`,
            data: newProgram
        }).then(response=>{
            this.props.history.push("/");
        }).catch(err => console.log(err))
    }

  onSubmit(e){
      
    const newProgram={
        programId: this.state.programId,
        programName: this.refs.programName.value
    }
    this.editProgram(newProgram)    
    e.preventDefault();

  }

  handleInputChange(e){
      const target = e.target;
      const value = target.value;
      const programName = target.programName;
      this.setState({
          [programName]:value
      })
  }
    render(){
        return(
            <div>

                <h1>Edit Program</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <Form.Label>Program Name</Form.Label>

                    <input type="text" name="programName" ref="programName" value={this.state.programName} onChange={this.handleInputChange}/>
                    <input type="submit" value="save"/>
                </form>
            </div>
          
        )
    }
}