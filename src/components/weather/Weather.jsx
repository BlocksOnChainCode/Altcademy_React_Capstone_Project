import Navbar from "../Navbar";
import { useEffect, useState } from "react";
import "./Weather.scss";

const Weather = () => {
  const [weather, setWeather] = useState({
    location: {
      name: "new york",
    },
    current: {
      temp_f: 0,
      condition: {
        text: "clear",
      },
    },
  });

  const apiCall = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const location = position.coords;
      const lat = location.latitude;
      const lon = location.longitude;
      let weatherData = {};
      const APIKEY = "c7931983652147bf994145319232404";
      const singleDay = 1;
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${lat},${lon}&days=${singleDay}&aqi=no&alerts=no`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          weatherData = data;
          setWeather(weatherData);
        })
        .catch((error) => console.log(error));
    });
  };

  useEffect(() => {
    apiCall(weather, setWeather);
  }, []);

  return (
    <div id="Weather">
      <Navbar />
      <div id="Home_Overview">
        <div className="row">
          <h2 id="city">{weather.location.name}</h2>
          <h2 id="temp">{weather.current.temp_f}°F</h2>
        </div>
        <div className="row">
          <h2 id="condition">{weather.current.condition.text}</h2>
          <img
            id="condition-icon"
            src={weather.current.condition.icon}
            alt={weather.current.condition.text}
          />
        </div>
      </div>

      <div id="Home_Details">
        <div className="detail">
          <h2>Wind</h2>
          <h2>{weather.current.wind_mph} mph</h2>
        </div>
        <div className="detail">
          <h2>Humidity</h2>
          <h2>{weather.current.humidity} %</h2>
        </div>
        <div className="detail">
          <h2>Feels Like</h2>
          <h2>{weather.current.feelslike_f}°F</h2>
        </div>
        <div className="detail">
          <h2>UV Index</h2>
          <h2>{weather.current.uv}</h2>
        </div>
      </div>
    </div>
  );
};

export default Weather;
