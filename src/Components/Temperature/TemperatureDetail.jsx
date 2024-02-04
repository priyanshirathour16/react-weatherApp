import React from "react";
import "./TemperatureDetail.css";
import {
  UilTemperatureThreeQuarter,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilArrowUp,
  UilArrowDown,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../../api/weatherServives";

const TemperatureDetail = ({
  weather: {
    temp,
    timezone,
    temp_min,
    temp_max,
    icon,
    sunrise,
    humidity,
    feels_like,
    sunset,
    speed,
  },
}) => {
  return (
    <div className="temperature-container">
      <div className="weather-box">
        <img
          src={iconUrlFromCode(icon)}
          alt="weather-img"
          className="weather-img"
        />
        <div className="temp-box">
          <span>
            {temp.toFixed()}
            <sup>°</sup>
          </span>
        </div>
        <div className="temperature-details-2">
          <div>
            <UilTemperatureThreeQuarter size={15} />
            <span>Real Felt : {feels_like.toFixed()}°</span>
          </div>
          <div>
            <UilTear size={15} />
            Humidity : {humidity.toFixed()} %
          </div>
          <div>
            <UilWind size={15} /> Wind : {speed.toFixed()} km/hr
          </div>
        </div>
      </div>

      <div className="extra-tempertaure">
        <UilSun size={30} />
        <p>
          Rise :{" "}
          <span className="extra-temp">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p> | </p>
        <UilSunset size={30} />
        <p>
          Set :
          <span className="extra-temp">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p> | </p>
        <UilArrowUp size={30} />
        <p>
          High : <span className="extra-temp">{temp_max} °</span>
        </p>
        <p> | </p>
        <UilArrowDown size={30} />
        <p>
          Low : <span className="extra-temp">{temp_max}° </span>
        </p>
      </div>
    </div>
  );
};

export default TemperatureDetail;
