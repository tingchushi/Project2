
import { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';



 
function App() {
  const [country , setCountry] = useState('');
  const [iso , setIso] = useState('')
  const [date, setDate] = useState('')
  const [active, setActive] = useState('')
  const [title, setTitle] = useState([]);
  const [fruit, setFruit] = useState();
  const [arr, setArr]  = useState([])



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
      
        // console.log(data.data)

      setCountry(data.data[fruit].region.name)
      setIso(data.data[fruit].region.iso)
      setDate(data.data[fruit].date)
      setActive(data.data[fruit].active)
      
      const datas = data.data;
      // console.log(datas);
      const arrResult = [];
      datas.forEach(function(value, index) {
      arrResult[index] = value;
      setTitle(JSON.stringify(arrResult)
      )});
   
    },[])
     })
    
    console.log(title)
    
  
    const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }

    const handleClick = () => {
      console.log("Click");
      // console.log(title);
    }
  
    const handleChange = (event) => {
      console.log('change');
      console.log("event",setFruit(event.target.value));
    }


      return (
      <div> 
        <h1>{JSON.stringify(title)}</h1>
      <input placeholder="input" onChange={handleChange} />

      <Button variant="dark" size='6em' onClick={handleClick}>Dark</Button> 

      <button onClick={handleClick}>Click</button>
      <div>
        {date}: {country} - {iso}
        </div>
      <li>Active Case: {active} + {title}</li>

    <div>
      <select id="fruits" value={fruit} 
              onChange={(e) => setFruit(e.target.value)}>
        {/* {data.data.map((e)=> {
          <option value={e}>{e.name}</option>
        })} */}
        <option >Select a Country</option>
        <option value="0">Afghanistan</option>
        <option value="1">Albania</option>
        <option value="2"></option>
        <option value="3"></option>

      </select>
      <h4>Selected: {fruit}</h4>
    </div>
      </div>
  )
}

export default App