import React, { useState } from 'react'
import Dynamicbox from './Dynamicbox';

const api = {
  key: "22c3e36f4cb22ac3f14b3a4553276b38",
  base: "https://api.openweathermap.org/data/2.5/",
}

const NavHeader = ({ onWeatherChange }) => {

  const [search, setSearch] = useState("");
  // const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        onWeatherChange(result);
      })
  }
  return (
    <div className="navHeader">
      <span id='heading'>AccuWeather</span>
      <span id='location'>{search}</span>
      <div className="search-box">

        <input type="text" placeholder="Address, City or Zip Code" className="search-input"
          onChange={(e) => setSearch(e.target.value)} />

      </div>
      <button id='checkbtn' onClick={searchPressed}>Check</button>
    </div>
  )
}

export default NavHeader
