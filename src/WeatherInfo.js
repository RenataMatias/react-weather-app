import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import CurrentTemperature from "./CurrentTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          <CurrentDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 ">
          <div className="d-flex justify-content-center">
            <WeatherIcon
              iconInfo={props.info.icon}
              alt={props.info.description}
              size={64}
            />
            <CurrentTemperature celsius={props.info.temperature} />
          </div>
        </div>
        <div className="col-6 text-center">
          <ul>
            <li>Feels Like: {props.info.feels_like}°C</li>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
