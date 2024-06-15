import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid' id='footer'>
          <p className='text-dark fs-4 text-center'>&copy; {new Date().getFullYear()} WeatherHub. All rights reserved.</p>
    </div>
  )
}

export default Footer