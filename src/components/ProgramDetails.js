import React, {Component} from 'react';
import axios from 'axios'
import {BrowserRouter, Link,Router} from 'react-router-dom'
import {Table,Button, Container, Card,Col} from 'react-bootstrap';

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
                <Container>
                    <Col md={{ span: 6, offset: 3 }}>
                      <h1>Program details</h1>
               
               <Card>
                   <Card.Img src="https://allcoinbits.com/wp-content/uploads/2018/02/Enchiridion.jpg" width="200" height="300"/>
                   <Card.Body>
                       <Card.Title>{this.state.programDetails.programName}</Card.Title>
                       <Card.Text>{this.state.programDetails.instructor}</Card.Text>
                       <Card.Text>{this.state.programDetails.semester}</Card.Text>
                       <Card.Text>{this.state.programDetails.level}</Card.Text>

                       <Link to={`/editprogram/${this.state.programDetails.programId}`}><Button class="btn-block">Edit</Button></Link>

                        <Button class="btn-block" onClick={this.onDelete.bind(this)}>Delete</Button>
                   </Card.Body>
               </Card>
               

                    </Col>
                  
                </Container>
              
            </div>
        )
    }
}