
import { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css'

 
function App() {
  const [country , setCountry] = useState('');
  const [iso , setIso] = useState('')
  const [date, setDate] = useState('')
  const [active, setActive] = useState('')
  const [title, setTitle] = useState(" ");
  const [fruit, setFruit] = useState();



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

      setCountry(data.data[fruit].region.name)
      setIso(data.data[fruit].region.iso)
      setDate(data.data[title].date)
      setActive(data.data[title].active)

    },[])
     })
    
    // console.log(data.data[0].region.name)
    // setSat(sat.data)
    
  
    const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }

    const handleClick = () => {
      console.log("Click");
      console.log(title);
    }
  
    const handleChange = (event) => {
      console.log('change');
      console.log("event",setTitle(event.target.value));
    }


      return (
      <div> 
        {/* {sat} */}
        <h1>{title}</h1>
      <input placeholder="input" onChange={handleChange} />
           {/* <input
        placeholder="Method A"
        onBlur={handleChange}
        defaultValue={title}
      /> */}
      <button onClick={handleClick}>Click</button>
      <div>
        {date}: {country} - {iso}
        </div>
      <li>Active Case: {active}</li>

      {/* <div>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">0</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
  */}
    <div>
      <select id="fruits" value={fruit} 
              onChange={(e) => setFruit(e.target.value)}>
        <option value="0">AFG</option>
        <option value="2">Pear</option>
        <option value="3">Pineapple</option>
      </select>
      <h1>Selected Fruit: {fruit}</h1>
    </div>
      </div>
  )
}

export default App

// {
//   data: {
//     data [0]: region,

//   }
// }