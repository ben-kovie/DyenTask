import React from 'react';

import './App.css';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';


import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
                  <Router>
                 <div>
                  
                     <Navbar/>
             
                       <Home/>
    
                 

               </div>
             </Router>
  );
}

export default App;
