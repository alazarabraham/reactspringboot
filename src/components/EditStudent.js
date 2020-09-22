import React, {Component} from 'react';
import axios from 'axios'
import {BrowserRouter, Link,Router} from 'react-router-dom'
import {Table,Button, Form, Container,Col} from 'react-bootstrap';

export default class EachStudent extends Component{
    constructor(props){
        super(props);
        this.state={
            studentId:"",
            firstname:"",
            lastname:"",
            degreeProgram:"",
            dob:""

        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

  componentDidMount(){
      this.getEditDetails();
  }

  getEditDetails(){
    let studentId = this.props.match.params.studentId;

    axios.get(`http://localhost:8080/api/students/${studentId}`)
    .then(response=>{
        this.setState({
            studentId: response.data.studentId,
            firstname: response.data.firstname,
            lastname: response.data.lastname,
            degreeProgram: response.data.degreeProgram,
            dob: response.data.dob,
        })
    })
    .catch(error=>console.log(error))
}

    editStudent(datainput){
        axios.request({
            method:"put",
            url:`http://localhost:8080/api/students/${this.state.studentId}`,
            data: datainput
        }).then(response=>{
            this.props.history.push("/");
        }).catch(err => console.log(err))
    }

  onSubmit(e){
      
    const dataInput={
        studentId: this.state.studentId,
        firstname: this.refs.firstname.value,
        lastname: this.refs.lastname.value,
        degreeProgram: this.refs.degreeProgram.value ,
        dob: this.refs.dob.value
    }
    console.log(dataInput)
    this.editStudent(dataInput)    
    e.preventDefault();

  }



  handleInputChange(e){
      const target = e.target;
      const value = target.value;
      const firstname = value.firstname;
      const lastname = value.lastname;
      const degreeProgram = value.degreeProgram;
      const dob = value.dob;

      this.setState({
          [firstname]:value,
          [lastname]:value,
          [degreeProgram]:value,
          [dob]:value
      })
  }
  
    render(){
        return(
            <div>

                <h1>Edit Student</h1>
                <Container>
                    <Col  md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={this.onSubmit.bind(this)}>
                        <Form.Label>Student Name</Form.Label>

                        <Form.Control type="text" name="firstname" ref="firstname" placeholder={this.state.firstname} onChange={this.handleInputChange}/>
                        <Form.Label>Last Name</Form.Label>

                        <Form.Control type="text" name="lastname" ref="lastname" placeholder={this.state.lastname} onChange={this.handleInputChange}/>
                        
                        <Form.Group>
                            <Form.Label>Semester</Form.Label>

                            <Form.Control  as="select" name="degreeProgram" ref="degreeProgram" placeholder={this.state.degreeProgram} onChange={this.handleInputChange} >
                            <option value="Undergraduate program">Undergraduate program</option>
                            <option value="Graduate program">Graduate program</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Control type="text" name="dob" ref="dob" value={this.state.dob} onChange={this.handleInputChange}/>

                        <Button type="submit"  variant="dark" >Save</Button>
                    </Form>
                    </Col>
                </Container>

               
            </div>
          
        )
    }
}