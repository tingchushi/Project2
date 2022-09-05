// import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react'

function App() {
  const [state , setState] = useState('')

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f42d8fa1a7msh98395db0e1a5533p179806jsnc430cce8857b',
        'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
      }
    };
    
    fetch('https://covid-19-statistics.p.rapidapi.com/reports', options)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
      setState(data.data[0].region.name)
      setState(data.data[0].region.iso)
      },[])
      // .catch(err => console.error(err));

    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': 'f42d8fa1a7msh98395db0e1a5533p179806jsnc430cce8857b',
    //     'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
    //   }
    // };
    
    // fetch('https://covid-19-statistics.p.rapidapi.com/reports/total?date=2020-04-07', options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));
     })

  
    console.log(state)

      return (
      <div> 
        {/* <BrowserRouter >
        <Routes>
          <Route /> */}
       <form>
       <input placeholder='input'></input>
       <button>{state}</button>
       </form>
        {/* </Routes>
        </BrowserRouter> */}
      </div>
  )
}

export default App
