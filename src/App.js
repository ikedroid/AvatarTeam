import React from 'react';
import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  
 const [word, setWord] = useState("")
  const change =(e) =>{
      setWord(e.target.value);
  }

  
  return (
    <React.Fragment>
      <Header/>
      <Main value={change} word={word}/>
      <Footer/>
    </React.Fragment>
  )
}

export default App;
