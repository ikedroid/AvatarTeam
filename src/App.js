import React from 'react';
import './App.css';
import { useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar'
import Main from './components/Main';

function App() {
  return (
    <div className="mainpage-wrapper">
      <div>
        <NavBar />
      </div>
      <div>  
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>


  )
}

export default App;
