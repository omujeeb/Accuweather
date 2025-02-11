import './App.css';
import React, { useState } from 'react';
import Staticbox from './Components/Staticbox';
import NavHeader from './Components/NavHeader';
import Dynamicbox from './Components/Dynamicbox';
function App() {
  const [weather, setWeather] = useState({});

  const handleWeatherChange = (weatherData) => {
    setWeather(weatherData);
  };
  return (
    <div>
      <NavHeader onWeatherChange={handleWeatherChange} />
      <Staticbox></Staticbox>
      <Dynamicbox weather={weather} />

    </div>


  );
}

export default App;
