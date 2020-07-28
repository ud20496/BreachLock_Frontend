import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import UploadFile from './components/UploadFile';
import DisplayData from './components/DisplayData';

function App() {
  return (
   <Router>
     <Switch>
       <Route path='/' component={UploadFile} exact></Route>
       <Route path='/display' component={DisplayData} exact></Route>
     </Switch>
   </Router>
  );
}

export default App;
