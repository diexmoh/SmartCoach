import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import Parallax from './NavParallax.js';
import DivFooter from './Footer.js';
import Benefits from './Benefits.js';
import Planes from './Planes.js';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Nav />
        <Parallax />
        <Benefits />
        <Planes />
        <DivFooter />
      </div>
    );
  }
}

export default App;
