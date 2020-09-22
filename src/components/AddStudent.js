import React, {Component} from 'react';
import axios from 'axios'
import {BrowserRouter, Link,Router} from 'react-router-dom'
import {Table,Button, Form,Col,Container} from 'react-bootstrap';

export default class AddStudent extends Component{

  addStudent(newStudent){
      
      axios.request({
          method:"post",
          url:"http://localhost:8080/api/students",
          data: newStudent
      }).then(response=>{
          console.log(response)
          this.props.history.push("/");
      }).catch(err => console.log(err))
  }


  onSubmit(e){
      
    const newStudent={
        
        firstname: this.refs.firstname.value,
        lastname: this.refs.lastname.value,
        degreeProgram: this.refs.degreeProgram.value ,
        dob: this.refs.dob.value

    }
    console.log(newStudent)
    this.addStudent(newStudent)    
    e.preventDefault();

  }
    render(){
        return(
            <div>

                <h1>Add Student</h1>
                <Container>
                    <Col  md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={this.onSubmit.bind(this)}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="firstname" ref="firstname"/>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lastname" ref="lastname"/>
                        <Form.Group>
                            <Form.Label>Degree Program</Form.Label>

                            <Form.Control as="select" name="degreeProgram" ref="degreeProgram"  >
                            <option value="Undergraduate Program ">Undergraduate Program</option>
                            <option value="Graduate Program ">Graduate Program</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="text" name="dob" ref="dob"/>
                       
                        <Button  type="submit" value="save" variant="dark">Save</Button>
                    </Form>
                    </Col>
                </Container>
                
            </div>
          
        )
    }
}