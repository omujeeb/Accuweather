
const Dynamicbox = ({ weather }) => {

  return (
    <div className="weather-card">
      {/* Header */}
      <div className="weather-header">
        <span>Today Weather</span>
      </div>

      {/* Main Weather Info */}
      <div className="weather-main">
        <div className="weather-temp">

          <span className="temp">{weather?.main?.temp}°C</span>

        </div>

      </div>

      {/* Weather Description */}
      <div className="weather-description">{weather?.description}</div>

      {/* Weather Details Grid */}
      <div className="weather-details">
        <div><span>Wind</span><span>{weather?.wind?.speed}mph</span></div>
        <div><span>Probability of Thunderstorms</span><span>{weather?.main?.temp}%</span></div>
        <div><span>Wind Gusts</span><span>{weather?.wind?.gust}mps</span></div>
        <div><span>Pressure</span><span>{weather?.main?.pressure}hPa</span></div>
        <div><span>Humidity</span><span>{weather?.main?.humidity}%</span></div>
        <div><span>Cloud</span><span>{weather?.clouds?.all}okta</span></div>
      </div>
    </div>
  );
};

export default Dynamicbox;
