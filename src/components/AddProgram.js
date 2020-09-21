import React, {Component} from 'react';
import axios from 'axios'
import {BrowserRouter, Link,Router} from 'react-router-dom'
import {Table,Button, Form,Col,Container} from 'react-bootstrap';

export default class AddProgram extends Component{

  addProgram(newProgram){
      
      axios.request({
          method:"post",
          url:"http://localhost:8080/api/programs",
          data: newProgram
      }).then(response=>{
          this.props.history.push("/");
      }).catch(err => console.log(err))
  }


  onSubmit(e){
      
    const newProgram={
        
        programName: this.refs.programName.value,
        instructor: this.refs.instructor.value,
        semester: this.refs.semester.value + " " + new Date().getFullYear(),
        level: this.refs.level.value

    }
    this.addProgram(newProgram)    
    e.preventDefault();

  }
    render(){
        return(
            <div>

                <h1>Add Program</h1>
                <Container>
                    <Col  md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={this.onSubmit.bind(this)}>
                        <Form.Label>Program Name</Form.Label>
                        <Form.Control type="text" name="programName" ref="programName"/>
                        <Form.Label>Instructor</Form.Label>
                        <Form.Control type="text" name="instructor" ref="instructor"/>
                        <Form.Group>
                            <Form.Label>Semester</Form.Label>

                            <Form.Control as="select" name="semester" ref="semester"  >
                            <option value="Spring ">Spring  {new Date().getFullYear()}</option>
                            <option value="Summer ">Summer  {new Date().getFullYear()}</option>
                            <option value="Fall ">Fall  {new Date().getFullYear()}</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Level</Form.Label>

                            <Form.Control as="select" type="text" name="level" ref="level" >
                            <option value="Undergraduate program">Undergraduate program </option>
                            <option value="Graduate program">Graduate program</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Label>Level</Form.Label>
                       
                        <Form.Control type="submit" value="save"/>
                    </Form>
                    </Col>
                </Container>
                
            </div>
          
        )
    }
}