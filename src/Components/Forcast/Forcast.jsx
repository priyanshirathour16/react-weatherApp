import React from "react";
import "./Forcast.css";
import { iconUrlFromCode } from "../../api/weatherServives";

const Forcast = ({ title, items }) => {
  return (
    <div>
      <div className="forcast-hourly-text">{title}</div>
      <hr />
      <div className="forcast-hourly-container">
        {items.map((item) => (
          <div className="forcast-content">
            <div>{item.title}</div>
            <div className="forcast-content-div2">
              <span>{item.description}</span>
              <img src={iconUrlFromCode(item.icon)} alt="weather-img" />
            </div>
            <div>{item.temp.toFixed()}°</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forcast;
