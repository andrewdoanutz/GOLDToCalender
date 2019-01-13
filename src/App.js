import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";

import NavBar from './components/navbar';
import Home from './home.js';
import About from './components/aboutus'

import './css/App.css';

class App extends Component {
  
  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
          <NavBar/>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
    
        </div>
      </BrowserRouter>
       </div>
    );
  }
}

export default App;
