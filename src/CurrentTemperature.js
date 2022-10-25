import React from "react";

export default function CurrentTemperature(props) {
  return (
    <div className="CurrentTemperature">
      <span className="temperature">{props.celsius}</span>
      <span className="unit">°C</span>
    </div>
  );
}
