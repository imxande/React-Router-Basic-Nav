import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />

    <Route exact path='/' component={Home} /> 
    <Route path= "/about" component={Contact}/>
    <Route path= "/contact"  component={About}/>
  </div>
);

export default App;
