import React, { useState } from "react";
import "./Input.css";

const Input = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");
  const handleUnitChange = (e) => {
    const selectUnit = e.currentTarget.name;
    console.log("unit", selectUnit);
    if (units !== selectUnit) {
      setUnits(selectUnit);
    }
  };
  const searchHandler = () => {
    if (city !== "") {
      setQuery(city);
    }
    setCity("");
  };
  return (
    <div className="input-container">
      <div className="input-box">
        <input
          type="text"
          placeholder="Search for city...like - Delhi"
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
        />
        <div className="input-search" onClick={searchHandler}>
          <i class="fa-solid fa-magnifying-glass" onClick={searchHandler}></i>
        </div>
      </div>
      <div className="temperature">
        <h2>
          <button
            onClick={handleUnitChange}
            name="metric"
            className="data-button"
          >
            °C
          </button>
          <span> |</span>
          <button
            onClick={handleUnitChange}
            name="imperial"
            className="data-button"
          >
            °F
          </button>
        </h2>
      </div>
    </div>
  );
};

export default Input;
