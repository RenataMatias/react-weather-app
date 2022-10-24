import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  // console.log(props);

  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function forecastInfo(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (value, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay forecastInfoDay={value} />
                </div>
              );
            }
            return null;
          })}
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
