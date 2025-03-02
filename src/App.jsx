// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';
import './App.css';
import NavBar from './components/Header';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
