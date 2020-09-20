import React, {Component} from 'react';
import axios from 'axios'
import {BrowserRouter, Link,Router} from 'react-router-dom'
import {Table,Button} from 'react-bootstrap';

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
        
        programName: this.refs.programName.value
    }
    this.addProgram(newProgram)    
    e.preventDefault();

  }
    render(){
        return(
            <div>

                <h1>Add Program</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Program Name</label>
                    <input type="text" name="programName" ref="programName"/>
                    <input type="submit" value="save"/>
                </form>
            </div>
          
        )
    }
}