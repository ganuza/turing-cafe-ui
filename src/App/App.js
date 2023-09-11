import './App.css';
import React from 'react';
import Reservations from '../components/Reservations/Reservations';
import { useState, useEffect } from 'react'

function App() {

  const [resies, setResies] = useState([])
  const [error, setError] = useState('')

  function getResies() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
      .then(data => setResies([...resies, ...data]))
      .catch(error => setError(error.message))
  }

  useEffect(() => {
    getResies()
  },[])

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <h2>Form Container</h2>
      </div>
      <div className='resy-container'>
        <Reservations resies={resies} />
      </div>
    </div>
  );
}

export default App; 