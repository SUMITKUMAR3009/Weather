import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Search.css";
import { useState } from 'react';

function Search({updateInfo}){
    let [city,setCity]=useState("");
let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
   const API_KEY ="1031e82180981b48e6b9fba105594774";


let getWeatherinfo =async ()=>{
  try{
    let response =   await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let Jsonresponse = await response.json();
  console.log(Jsonresponse);
  let result={
     city:city,
      feels_like: Jsonresponse.main.feels_like, 
    humidity: Jsonresponse.main.humidity,
   pressure: Jsonresponse.main.pressure,
    temp :Jsonresponse.main.temp,
   temp_max: Jsonresponse.main.temp_max,
   temp_min: Jsonresponse.main.temp_min,
    weather:Jsonresponse.weather[0].description, 
  
  };
  console.log(result);
  return result;

  } catch(err){
    throw err
  }
  
};


  

let handlechange =(event)=>{
  setCity(event.target.value) 
};


  let submithandle= async (event)=>{
    try{
      event.preventDefault();
      console.log(city);
      setCity("");
       let newInfo =  await getWeatherinfo();
       updateInfo(newInfo);
    
    }catch(err){
      setError(true);
    }
    
  };
   

    return (
        <div className="SearchBox">
   
<form onSubmit={submithandle}>
<TextField id="City" label="City Name" className='red' variant="standard" required value={city} 
onChange={handlechange}
/>
<br />
<br />

<Button variant="contained" type='submit'>Search</Button>
{error && <p>No such place exist ! </p>}
</form>
        
        </div>
    );
}

export default Search