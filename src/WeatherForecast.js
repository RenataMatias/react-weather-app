import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  // console.log(props);

  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function forecastInfo(response) {
    setForecast(response.data.daily[0]);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <ForecastDay forecastInfo={forecast} />
          </div>
        </div>
      </div>
    );
  } else {
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let apiKey = "04oa8b0322cc23f4f1bfd9a0baat56fe";
    let units = "metric";
    let apiUrl = ` https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&unitis=${units}`;
    axios.get(apiUrl).then(forecastInfo);
    return null;
  }
}
