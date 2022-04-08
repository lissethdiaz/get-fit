import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar'
import ExercisesList from './components/exerciseList';
import EditExercise from './components/editExercise';
import CreateExercise from './components/createExercise';
import CreateUser from './components/createUser';

const App = () => {

  
  return (
    <div className='image'>
    <Router>
    <div className="container">
      <Navbar />
      <br/>
      <Route path='/' exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </div>
    </Router>
    </div>
    
  );
}

export default App;
