    import  Search from "./Search";
    import InfoBox from "./InfoBox";
import { useState } from "react";
    
    
    export default function WeatherApp(){
        const [weatherinfo,setWeatherinfo]=useState({
 city:"Bijnor",
feels_like: 30.57,
humidity: 48,
pressure: 1007,
temp: 29.27,
temp_max: 29.27,
temp_min: 29.27,
weather: "Clear sky",
        });

let updateInfo = (newInfo)=>{
     setWeatherinfo(newInfo);
}
    return(
        <div style={{textAlign:"center"}}>
    <h1> Weather App BY SUMIT OLIHAN</h1>
       <Search updateInfo= {updateInfo} />
         <InfoBox info={weatherinfo} />   
        </div>
    )
}