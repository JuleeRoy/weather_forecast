import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
   <Link className="navbar-brand d-flex" href="#" to="/">
      <img src={logo} alt="" className="d-inline-block align-text-top"
      id="logo"/>
      <p className="logo_text">
         <span className="fs-3 text-primary">Weather</span>
          <span className="text-warning fw-bold">Hub</span>
         </p>
    </Link>
  

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className="nav-link" to="/favorites" id="nav-link">
               Favourite
             </Link>
          </li>
          <li className="nav-item">
          <Link
                className="nav-link"
                aria-current="page"
                to="/more"
                 id="nav-link"
               >
                DailyForecast
              </Link>
          </li>
          
        </ul>
       
      </div>
    </div>
  </nav>
  )
}

export default Navbar