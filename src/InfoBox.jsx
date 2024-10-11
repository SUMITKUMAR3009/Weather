import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./Info.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function  InfoBox({info}){
  let  INIT_URL ="https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=Dbpa9jxwFTZnW-yyyJccEU_FqhEL3fXqMIP68kbLUFw=";
let COLD_URL="https://media.istockphoto.com/id/483785638/photo/fallen-leaf-covered-in-winter-frost.webp?a=1&b=1&s=612x612&w=0&k=20&c=pUWgbqzaP4QmtC1nQ9nxpsY9oWTeTrIL29T1aRNgw48=";
  let HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  let RAIN_URL ="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ="; 
  return(
<div className="InfoBox">
<div className='cardcontainer'>
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={
           info.humidity>80
            ? RAIN_URL
            :info.temp>15
            ? HOT_URL
            :COLD_URL
          }
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{
           info.humidity>80
            ? <ThunderstormIcon/>
            :info.temp>15
            ? < LightModeIcon/>
            :<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}  component={"span"}>
        <p>Temperature ={ info.temp}&deg;C </p>
        <p>Temp Max ={info.temp_max}&deg;C  </p>
        <p>Temp Min = {info.temp_min}&deg;C </p>
        <p>Humidity={info.humidity} </p>
        <p>Feels_like={info.feels_like}&deg;C</p>
        <p>Weather  ={info.weather} </p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
</div>

  );

}