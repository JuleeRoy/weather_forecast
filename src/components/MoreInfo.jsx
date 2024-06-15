import React ,{useContext} from 'react'
import HourlyForecast from './HourlyForecast'
import DailyForecast from './DailyForecast'
import { WeatherContext } from '../context/WeatherContext'
const MoreInfo = () => {
  const { dailyForecast ,city } = useContext(WeatherContext);
  return (
    <div>
      <h2 className='text-uppercase'>{city}</h2>
        {/* <HourlyForecast/> */}
         <div className='mt-3'>
         <DailyForecast/>
         </div>
    </div>
  )
}

export default MoreInfo