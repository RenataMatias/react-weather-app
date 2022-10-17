import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function currentWeather(response) {
    setLoaded(true);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
    setIcon(response.data.weather[0].icon);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `c6844eedf01fc7efca28dfb3664eebd6`;
    let units = `metric`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(currentWeather);
  }

  function newCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={newCity} placeholder="Type a city" />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="Search">
        {form}
        <ul className="currentInfo">
          <li>Temperature: {temperature}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={description}
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
