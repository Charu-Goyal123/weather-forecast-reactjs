import React from 'react';
import axios from 'axios';
import './WeatherApp.css';
import { useState } from 'react';
// import search_icon from '../assets/search.png';
// import clear_icon from '../assets/clear.png';
// import cloud_icon from '../assets/cloud.png';
// import drizzle_icon from '../assets/drizzle.png';
// import rain_icon from '../assets/rain.jpg';
// import snow_icon from '../assets/snow.jpg';
// import humidity_icon from '../assets/humidity.jpg';
// import wind_icon from '../assets/wind.png';

const WeatherApp = () => {
   const[data, setData] = useState({})
   const [location, setLocation] = useState("")

  // useEffect(()=>
  // {
  //   const fetchApi = async()=>{
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=814f02ab26d8a5cb9efa25b16e5cf5d8`;
    const searchLocation = (event)=>{
      if(event.key === 'Enter')
      {
        axios.get(url).then((response)=>{
          setData(response.data)
          console.log(response.data)
        })
        setLocation('')
      }
    }
  //     const response = await fetch(url);
  //     //console.log(response);
  //     const resJson = await response.json();
  //     //console.log(resJson);
  //     setCity(resJson);
  //   }
  //   fetchApi();
  // },[search])

  //let api_key = "814f02ab26d8a5cb9efa25b16e5cf5d8";
  // const search = () =>{
  //   const element = document.getElementsByClassName("cityInput")
  //   if(element[0].value==="")
  //   {
  //     return 0;
  //   }
  //   let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   const humidity = document.getElementsByClassName("humidity-percent");
  //   const wind = document.getElementsByClassName("wind-rate");
  //   const temprature = document.getElementsByClassName("weather-temp");
  //   const location = document.getElementsByClassName("weather-loaction");

  //   humidity[0].innerHTML = data.main.humidity;
  //   wind[0].innerHTML = data.wind.speed;
  //   temprature[0].innerHTML = data.main.temp;
  //   location[0].innerHTML = data.name;

  // }
  return (
    <div className='app'>
      <div className='search'>
        <input value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} placeholder='Enter Location' type='text'></input>
      </div>
      <div className='container'>
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> :null}
            {/* <h1>{data.main.temp}°F</h1> */}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p>:null}
            <p>Clouds</p>
          </div>
        </div>

        {data.name != undefined &&
        <div className="bottom">
        <div className="feels">
          {data.main  ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p>:null}
         
          <p>Feels Like</p>
        </div>
        <div className="humidity">
          {data.main?<p className='bold'>{data.main.humidity}%</p>:null}
         
          <p>Humidity</p>
        </div>
        <div className="wind">
          {data.wind ?<p className='bold'>{data.wind.speed.toFixed()}MPH</p>:null}
          <p>Wind Speed</p>
        </div>
      </div>
        }
        
      </div>
    </div>
    // <div className='container'>
    //     <div className='top_bar'>
    //         <input type='search' className='cityInput' placeholder='Search' onChange={(event)=>{setSearch(event.target.value)}}></input>
    //         <div className='search_icon'>
    //             <img src={search_icon} alt="/"></img>
    //         </div>
    //     </div>
    //   <div className='weather-image'>
    //     <img src='' alt='/'></img>
    //   </div>
    //   {!city ? (
    //     <p>No Data Found</p>
    //   ):(
    //     <div>
    //     <div className='weather-temp'>{city.main.temp}°Cel</div>
    //     <div className='weather-location'>{search}</div>
    //     </div>
    //   )}
      
    //   <div className='data-container'>
    //     <div className='element'>
    //       <img src='' alt="" className='icon'></img>
    //       <div className='data'>
    //         <div className='humidity-percent'>{city.main.humidity}</div>
    //         <div className='text'>Humidity</div>
    //       </div>
    //     </div>
    //     <div className='element'>
    //       <img src='' alt="" className='icon'></img>
    //       <div className='data'>
    //         <div className='wind-rate'>{city.wind.speed}</div>
    //         <div className='text'>Wind Speed</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
  }

export default WeatherApp;
