// src/components/WeatherDashboard.js
import React, { useContext, useState, useEffect } from "react";
import { WeatherContext } from "../context/WeatherContext";
import Search from "./Search";
import WeatherDisplay from "./WeatherDisplay";
import Favorites from "./Favorites";

const WeatherDashboard = () => {
  const { weatherData, fetchWeather, favorites, removeFavorite } = useContext(WeatherContext);
  const [city, setCity] = useState("");

  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) fetchWeather(lastCity);
  }, []);

  return (

    <div className="container ">
      <div className="row align-items-center justify-content-between ">
        <div className="col-md-5 col-lg-6">
          <div className="d-flex p-3 gap-4" >
            <span className="text-warning line pr-5 d-inline-block"></span>
            <p className="h4 text-light">Weather <span className="text-warning">&</span> Forecast</p>
          </div>
          <p className="h2 text-light">Daily Weather Forecast Update News</p>
          <p className="text_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia nihil, consequuntur necessitatibus eveniet soluta magni reiciendis dolorum nam cum.</p>
          <Search fetchWeather={fetchWeather} setCity={setCity} city={city} />
        </div>


        <div className="col-md-7 col-lg-6 d-flex flex-column justify-content-center align-items-end mt-2" id="card_body">
        <div className="more  text-primary ">Daily Forecast</div>
        <WeatherDisplay weatherData={weatherData} />
      
       
        </div>
       
      </div>
    </div>
    // <div>
    //   
     
    // </div>
  );
};

export default WeatherDashboard;
