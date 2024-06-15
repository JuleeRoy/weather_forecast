import React, { useEffect, useState } from 'react';

const Search = ({ fetchWeather, setCity, city }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };
 

  return (
    <form onSubmit={handleSubmit} id='weather_form'
    className='border rounded-pill d-flex justify-content-between'>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="enter city"
      />
      <button type="submit" className='weather_btn rounded-pill '>Search</button>
    </form>
  );
};

export default Search;
