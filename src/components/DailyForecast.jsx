import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const DailyForecast = () => {
  const { dailyForecast} = useContext(WeatherContext);
  console.log(dailyForecast);

  if (!dailyForecast.length) return <div>No daily forecast available</div>;
  const getWeatherIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
  };

  return (
    <div className="">
      <h3 className="">Daily Forecast</h3>
      <div className="">
        {dailyForecast.map((day, index) => (
          <li key={index}>
             
            <p className="date fw-bold p-0 m-0 text-danger">
              {" "}
              {new Date(day.dt * 1000).toLocaleDateString()}
            </p>
            <div className="d-flex justify-content-between align-items-center ">
            <img
              src={getWeatherIconUrl(day.weather[0].icon)}
              alt="Weather Icon"
            />
            <span className="p-0 m-0">{day.main.temp}°C</span>
            <span className="text-uppercase p-0 m-0"> {day.weather[0].description}</span>
            </div>

          </li>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
