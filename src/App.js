import React from 'react';
import logo from './logo.svg';
import './App.css';
import Program from './components/Program'
import ProgramDetails from "./components/ProgramDetails"
import { Route,Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import AddProgram from './components/AddProgram';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
       <Route exact path="/" component={Program}/>
       <Route exact path="/program/:programId" component={ProgramDetails}/>
       <Route exact path="/addProgram" component={AddProgram}/>
    

     </Switch>
      </BrowserRouter>
       
     
    </div>
  );
}

export default App;
