import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function ForecastDay() {
    let Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = new Date(props.forecastInfoDay.time * 1000);
    return `${Days[day.getDay()]}`;
  }

  function ForecastTempMax() {
    return `${Math.round(props.forecastInfoDay.temperature.maximum)}`;
  }

  function ForecastTempMin() {
    return `${Math.round(props.forecastInfoDay.temperature.minimum)}`;
  }

  return (
    <div>
      <div className="ForecastDay">{ForecastDay()}</div>
      <div className="ForecastIcon">
        <WeatherIcon
          iconInfo={props.forecastInfoDay.condition.icon}
          size={32}
        />
      </div>
      <div className="ForecastTemp">
        <span className="ForecastTemp-Max">{ForecastTempMax()}°</span>
        <span className="ForecastTemp-min">{ForecastTempMin()}°</span>
      </div>
    </div>
  );
}
