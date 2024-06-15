import React, { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";
import HourlyForecast from "./HourlyForecast"
import DailyForecast from "./DailyForecast";
const WeatherDisplay = () => {
  const { weatherData, addFavorite} = useContext(WeatherContext);
  const [unit, setUnit] = useState("metric"); // 'metric' for Celsius, 'imperial' for Fahrenheit
  const [cityName,setCityName]=useState("")
  if (!weatherData) return <div>No data available</div>;
  console.log(weatherData);
 

 
  const toggleUnit = () => {
    setUnit(unit === "metric" ? "imperial" : "metric");
  };

  const convertToFahrenheit = (tempCelsius) => {
    return Math.round((tempCelsius * 9) / 5 + 32);
  };

  const temperature =
    unit === "metric"
      ? Math.round(weatherData.main.temp)
      : convertToFahrenheit(weatherData.main.temp);

  const getWeatherIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
  };

  const weatherIcon = getWeatherIconUrl(weatherData.weather[0].icon);

  return (
    
    <div className="flip-card p-3  m-auto">
    <div className="weather_card text-center front">
      <li className="cityName">
        <p className="m-0 p-0 h1">{weatherData.name}</p>
        <p className="m-0 p-0">{weatherData.weather[0].description}</p>
      </li>
      <li className="temp_value p-0 m-0">
        <p className="p-0 m-0">
          {temperature} {unit === "metric" ? "°C" : "°F"}
        </p>
      </li>
      <li className="weather_icon">
        <img src={weatherIcon} alt="Weather Icon" />
      </li>
      <li className=" d-flex gap-2 mt-3">
        <button className="weather_btn" onClick={toggleUnit}>
          {unit === "metric" ? "Fahrenheit" : "Celsius"} value
        </button>
        <button className="weather_btn fav_btn" onClick={() => addFavorite(weatherData.name)}>
          Add to Favorites
        </button>
      </li>
      <li className="text-center">
        <HourlyForecast />
      </li>
     
     
    </div>
    <div className="back p-3">
     <DailyForecast/>
    </div>
  </div>









  );
};

export default WeatherDisplay;
