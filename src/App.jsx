import MenuBar from './components/MenuBar';
import './App.css';
import React, { Component, useEffect, useState } from 'react';
import './styles.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';

// stateful class components -> extends Component class
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MenuBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Experiences" element={<Experiences />} />
            {/* <Route path="/Contact" element={<Contact />} /> */}
          </Routes>
        </header>
      </div>
    );
  }
}

export default App;
