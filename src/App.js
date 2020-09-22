import React from 'react';
import logo from './logo.svg';
import './App.css';
import Program from './components/Program'
import Students from './components/Students'
import StudentDetails from "./components/StudentDetails"

import ProgramDetails from "./components/ProgramDetails"
import { Route,Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import AddProgram from './components/AddProgram';
import AddStudent from './components/AddStudent';

import EditProgram from './components/EditProgram';
import EditStudent from './components/EditStudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
       <Route exact path="/" component={Program}/>
       <Route exact path="/students" component={Students}/>

       <Route exact path="/editprogram/:programId" component={EditProgram}/>
       <Route exact path="/editstudent/:studentId" component={EditStudent}/>

       <Route exact path="/program/:programId" component={ProgramDetails}/>
       <Route exact path="/student/:studentId" component={StudentDetails}/>

       <Route exact path="/addProgram" component={AddProgram}/>
       <Route exact path="/addStudent" component={AddStudent}/>

    

     </Switch>
      </BrowserRouter>
       
     
    </div>
  );
}

export default App;
