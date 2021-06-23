import React, { useState } from 'react';
import './App.scss';
import WeatherDisplay from './components/weatherDisplay/weatherDisplay.js';

import axios from 'axios';

function App() {
  const [weather, setWeather] = useState();
  const [degrees, setDegrees] = useState();
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [desc, setDesc] = useState();

  axios.get("https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/44418/").then((res) => { // api.alloworigins.win is a proxy to allow CORS compliant requests
    res = res.data
    setWeather(res.consolidated_weather[0].weather_state_name)
    setDegrees(Math.floor(res.consolidated_weather[0].the_temp))
    let day_date = new Date(res.consolidated_weather[0].applicable_date)
    setDay(day_date.getDate())
    setMonth(day_date.getMonth())
    setDesc(res.consolidated_weather[0].weather_state_name)
  })
  return (
    <div className="App bg">
      <WeatherDisplay weather={weather} degrees={degrees} day={day} month={month} desc={desc}></WeatherDisplay>
    </div>
  );
}

export default App;
