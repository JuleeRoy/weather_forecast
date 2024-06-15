// src/context/WeatherContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [city, setCity] = useState('');

  useEffect(() => {
    axios
      .get("http://localhost:5000/favorites")
      .then((response) => setFavorites(response.data))
      .catch((error) => console.error("Error fetching favorites:", error));
  }, []);

  const fetchWeather = (city) => {
    localStorage.setItem("lastCity", city);
    const apiKey = "e08622d35f7f8f32b6a52259dd56c88f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    console.log("Fetching weather for:", city);
    setCity(city)
    axios
      .get(url)
      .then((response) => {
        console.log("API Response:", response.data);
        setWeatherData(response.data);
        const { lat, lon } = response.data.coord;
        fetchForecast(lat, lon);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          console.error('City not found. Please enter a valid city.');
        } else {
          console.error('Error fetching weather data. Please try again later.');
        }
        setWeatherData(null);
      });
  };

  const fetchForecast = (lat, lon) => {
    const apiKey = "e08622d35f7f8f32b6a52259dd56c88f";
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios
      .get(url)
      .then((response) => {
        console.log("Forecast response:", response.data);

        // Extract hourly forecast (first 24 hours)
        const hourlyData = response.data.list.slice(0, 4); // 3-hour intervals, so 8 data points for 24 hours
        setHourlyForecast(hourlyData);

        // Extract daily forecast by taking the first data point of each day (every 8th entry)
        const dailyData = response.data.list.filter((_, index) => index % 8 === 0).slice(0, 5);
        setDailyForecast(dailyData);
       
      
      })
      .catch((error) => {
        console.error("Error fetching forecast:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        }
      });
  };

  const addFavorite = (city) => {
    // Check for duplicates
    if (favorites.some(fav => fav.name.toLowerCase() === city.toLowerCase())) {
     console.log('City is already in favorites');
    
      return;
    }
    
    axios
      .post("http://localhost:5000/favorites", { name: city })
      .then((response) => setFavorites([...favorites, response.data]))
      .catch((error) => console.error("Error adding favorite:", error));
      
  };

  const removeFavorite = (id) => {
    axios
      .delete(`http://localhost:5000/favorites/${id}`)
      .then(() => setFavorites(favorites.filter((fav) => fav.id !== id)))
      .catch((error) => console.error("Error removing favorite:", error));
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        hourlyForecast,
        dailyForecast,
        favorites,
        fetchWeather,
        addFavorite,
        removeFavorite,
        city
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
