// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherDashboard from './components/WeatherDashboard';
import Navbar from './components/Navbar';
import Favorites from './components/Favorites';
import WeatherProvider from './context/WeatherContext';
import MoreInfo from './components/MoreInfo';
import Footer from './components/Footer';

const App = () => {
  return (
    <WeatherProvider>
      <Router>
        <section id='main_banner'>
        <Navbar/>
          <div className='container weather_dashboard'>

            <Routes>
              <Route path="/" element={<WeatherDashboard />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/more" element={<MoreInfo />} />
            </Routes>
          </div>
          <Footer/>
        </section>

      </Router>
    </WeatherProvider>
  );
};

export default App;
