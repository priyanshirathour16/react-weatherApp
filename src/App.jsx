import React, { useEffect, useState } from "react";
import "./App.css";
import Location from "./Components/location/Location";
import Input from "./Components/Input/Input";
import TimeAndLocation from "./Components/Time/TimeAndLocation";
import Forcast from "./Components/Forcast/Forcast";
import getFormattedWeatherData from "./api/weatherServives";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [query, setQuery] = useState("berlin");
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getFormattedWeatherData({ query, units });
        if (data) {
          setWeather(data);
          toast.success("successfully fetched the data for " + data.name);
        } else {
          toast.error(" Something went wrong fror Data " + data.name);
        }
      } catch (error) {
        toast.error(" Something went wrong fror Data " + data.name);
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="app">
      {weather && <Location weather={weather} />}
      <Input setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <Forcast title="Hourly Forcast" items={weather.hourly} />
          <Forcast title="Daily Forcast" items={weather.daily} />
        </>
      )}
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
};

export default App;
