import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react'

function App() {
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f42d8fa1a7msh98395db0e1a5533p179806jsnc430cce8857b',
        'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
      }
    };
    
    fetch('https://covid-19-statistics.p.rapidapi.com/regions', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
    
    });
  
      return (
      <div>
        <BrowserRouter >
        <Routes>
          <Route />
        </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
