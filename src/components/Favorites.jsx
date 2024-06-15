// src/components/Favorites.js
import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const Favorites = () => {
  const { favorites, fetchWeather, removeFavorite } = useContext(WeatherContext);

  return (
    <div className='container-fluid' style={{height:"100vh"}}>
      <p className='h3 text-center mt-3 '>My Favourites city</p>
      <div className='d-flex justify-content-center  mt-3'>
        {favorites.map(fav => (
          <li key={fav.id} className='w-100 bg-light mb-5 px-3 rounded d-flex justify-content-between align-items-center fs-3'>
            <span 
            // onClick={() => fetchWeather(fav.name)} 
            className='text-dark fw-bolder'>{fav.name}</span>
            <button onClick={() => removeFavorite(fav.id)} className='weather_btn' style={{padding:"5px", fontSize:"small"}}>Remove</button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Favorites;


