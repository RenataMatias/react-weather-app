import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import CurrentDate from "./CurrentDate";

export default function Search(props) {
  const [currentWeather, setCurrentWeather] = useState({ ready: false });

  function SearchWeather(response) {
    // console.log(response);
    setCurrentWeather({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      humidity: Math.round(response.data.temperature.humidity),
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
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
          <li>
            <CurrentDate date={currentWeather.date} />
          </li>
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
              {/* <li>Preciptation: 15%</li> */}
              <li>Humidity: {currentWeather.humidity}%</li>
              <li>Wind: {currentWeather.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    // let city = "New York";
    let apiKey = "04oa8b0322cc23f4f1bfd9a0baat56fe";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(SearchWeather);
    return "Loading...";
  }
}
