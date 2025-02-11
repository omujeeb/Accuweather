import React from 'react'

const Staticbox = () => {
  return (
    <div>
      <div className="weather-card">
        <div className="weather-header">
          <span className="weather-title">TODAY'S WEATHER</span>
          <span className="weather-date">MON, FEB 10</span>
        </div>

        <div className="weather-info">
          <div className="weather-item">
            <span className="weather-icon">🌤️</span>
            <span>Hazy sun <strong>Hi: 93°</strong></span>
          </div>

          <div className="weather-item">
            <span className="weather-icon">🌙</span>
            <span>Tonight: Clear <strong>Lo: 55°</strong></span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Staticbox
