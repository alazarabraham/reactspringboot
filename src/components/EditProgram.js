import React, {Component} from 'react';
import axios from 'axios'
import {BrowserRouter, Link,Router} from 'react-router-dom'
import {Table,Button, Form, Container,Col} from 'react-bootstrap';

export default class AddProgram extends Component{
    constructor(props){
        super(props);
        this.state={
            programId:"",
            programName:"",
            instructor:"",
            semester:"",
            level:""

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
            programName: response.data.programName,
            instructor: response.data.instructor,
            semester: response.data.semester,
            level: response.data.level,
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
        programName: this.refs.programName.value,
        instructor: this.refs.instructor.value,
        semester: this.refs.semester.value,
        level: this.refs.level.value
    }
    this.editProgram(newProgram)    
    e.preventDefault();

  }

  handleInputChange(e){
      const target = e.target;
      const value = target.value;
      const programName = value.programName;
      const instructor = value.instructor;
      const semester = value.semester;
      const level = value.level;

      this.setState({
          [programName]:value,
          [instructor]:value,
          [semester]:value + " " + new Date().getFullYear(),
          [level]:value
      })
  }
    render(){
        return(
            <div>

                <h1>Edit Program</h1>
                <Container>
                    <Col  md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={this.onSubmit.bind(this)}>
                        <Form.Label>Program Name</Form.Label>

                        <Form.Control type="text" name="programName" ref="programName" placeholder={this.state.programName} onChange={this.handleInputChange}/>
                        <Form.Control type="text" name="instructor" ref="instructor" placeholder={this.state.instructor} onChange={this.handleInputChange}/>
                        <Form.Group>
                            <Form.Label>Semester</Form.Label>

                            <Form.Control as="select" name="semester" ref="semester" placeholder={this.state.semester} onChange={this.handleInputChange} >
                            <option value="Spring">Spring {new Date().getFullYear()}</option>
                            <option value="Summer">Summer {new Date().getFullYear()}</option>
                            <option value="Fall">Fall {new Date().getFullYear()}</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Semester</Form.Label>

                            <Form.Control  as="select" name="level" ref="level" placeholder={this.state.level} onChange={this.handleInputChange} >
                            <option value="Undergraduate program">Undergraduate program</option>
                            <option value="Graduate program">Graduate program</option>
                            </Form.Control>
                        </Form.Group>
                      
                        <input type="submit" value="save"/>
                    </Form>
                    </Col>
                </Container>
               
            </div>
          
        )
    }
}