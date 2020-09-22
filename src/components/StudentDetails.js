import React, {Component} from 'react';
import axios from 'axios'
import {BrowserRouter, Link,Router} from 'react-router-dom'
import {Table,Button, Container, Card,Col} from 'react-bootstrap';

export default class StudentDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            studentDetails:''
        }
    }
    componentDidMount(){
        this.getIndividualStudent();
    }
    getIndividualStudent(){
        let studentid = this.props.match.params.studentId
        axios.get( `http://localhost:8080/api/students/${studentid}`)
        .then(response=>{
            //setting the state to the json data, consoling it with a callback function
            this.setState({students:response.data},()=>{
                this.setState({studentDetails: response.data}, ()=> {
                })
    
            }
                
                )
        })
        .catch(err=> console.log(err))
    }

    onDelete(){
        let studentId = this.state.studentDetails.studentId;
        axios.delete(`http://localhost:8080/api/students/${studentId}`)
        .then(response=>{
            this.props.history.push("/");
        })
        .catch(error=>console.log(error))
    }
  
    render(){
        return(
            <div>
                <Link to="/">Back</Link>
                <Container>
                    <Col md={{ span: 6, offset: 3 }}>
                      <h1>Student details</h1>
               
               <Card>
                   <Card.Img src="https://allcoinbits.com/wp-content/uploads/2018/02/Enchiridion.jpg" width="200" height="300"/>
                   <Card.Body>
                       <Card.Title>{this.state.studentDetails.firstname}</Card.Title>
                       <Card.Text>{this.state.studentDetails.lastname}</Card.Text>
                       <Card.Text>{this.state.studentDetails.degreeProgram}</Card.Text>
                       <Card.Text>{this.state.studentDetails.dob}</Card.Text>

                       <Link to={`/editstudent/${this.state.studentDetails.studentId}`}><Button class="btn-block">Edit</Button></Link>

                        <Button class="btn-block" onClick={this.onDelete.bind(this)}>Delete</Button>
                   </Card.Body>
               </Card>
               

                    </Col>
                  
                </Container>
              
            </div>
        )
    }
}