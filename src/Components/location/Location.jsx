import React from "react";
import "./Location.css";
import { UilLocationPinAlt } from "@iconscout/react-unicons";
const Location = ({ weather: { name, country, description } }) => {
  return (
    <div className="location-container">
      <div>{description}</div>
      <div>
        {name} , {country}
      </div>
      <UilLocationPinAlt />
    </div>
  );
};

export default Location;
