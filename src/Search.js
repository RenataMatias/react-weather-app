import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  const [currentWeather, setCurrentWeather] = useState({ ready: false });

  function SearchWeather(response) {
    // console.log(response.data);
    setCurrentWeather({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: "Wednesday 07:00",
    });
  }

  if (currentWeather.ready) {
    return (
      <div className="Search">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{currentWeather.city}</h1>
        <ul>
          <li>{currentWeather.date}</li>
          <li className="text-capitalize">{currentWeather.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex">
              <img
                src={currentWeather.iconUrl}
                alt={currentWeather.description}
              />
              <span className="temperature">{currentWeather.temperature}</span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Preciptation: 15%</li>
              <li>Humidity: {currentWeather.humidity}%</li>
              <li>Wind: {currentWeather.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    // let city = "New York";
    let apiKey = "c6844eedf01fc7efca28dfb3664eebd6";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(SearchWeather);
    return "Loading...";
  }
}
