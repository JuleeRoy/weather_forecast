import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const HourlyForecast = () => {
  const { hourlyForecast } = useContext(WeatherContext);
  console.log("hourly data", hourlyForecast);

  if (!hourlyForecast.length) return <div>No hourly forecast available</div>;

  const getWeatherIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
  };

  return (
    <div className="hourly-forecast my-3 border-top">
   
      <div className="d-flex justify-content-evenly">
        {hourlyForecast.map((hour, index) => (
          <li key={index} className="">
            <img
              src={getWeatherIconUrl(hour.weather[0].icon)}
              alt="Weather Icon"
            />
            <p className="time p-0 m-0">
              {new Date(hour.dt * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                // minute: "2-digit",
                hour12: true,
              })}
            </p>
            <span className="temp p-0 m-0">{Math.round(hour.main.temp)}°C</span>,
          </li>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;




