import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import WeatherInfo from "./WeatherInfo";

export default function Search(props) {
  const [currentWeather, setCurrentWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function SearchWeather(response) {
    // console.log(response);
    setCurrentWeather({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      feels_like: Math.round(response.data.temperature.feels_like),
      humidity: Math.round(response.data.temperature.humidity),
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
    });
  }

  function searchApi() {
    let apiKey = "04oa8b0322cc23f4f1bfd9a0baat56fe";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(SearchWeather);
  }

  function HandleSubmit(event) {
    event.preventDefault();
    searchApi();
  }

  function handleNewCity(event) {
    setCity(event.target.value);
  }

  if (currentWeather.ready) {
    return (
      <div className="Search">
        <form onSubmit={HandleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleNewCity}
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
        <WeatherInfo info={currentWeather} />
      </div>
    );
  } else {
    return searchApi();
  }
}
