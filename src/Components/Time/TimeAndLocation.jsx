import React from "react";
import "./TimeAndLocation.css";
import TemperatureDetail from "../Temperature/TemperatureDetail";
import { formatToLocalTime } from "../../api/weatherServives";

const TimeAndLocation = ({ weather }) => {
  return (
    <div className="time-location-container">
      <div className="time">
        <p>{formatToLocalTime(weather.dt, weather.timezone)}</p>
      </div>
      <TemperatureDetail weather={weather} />
    </div>
  );
};

export default TimeAndLocation;
