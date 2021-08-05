import { useContext } from 'react'
import { WeatherContext} from './WeatherContext';
import {toCelcius, toDate} from './conversionFunctions'

export default function CurrrentWeather() {
    const { cityWeatherForecast } = useContext(WeatherContext)
    
   return( 
   <div className="current-weather">
       {
       cityWeatherForecast.length === 0
       ? <p></p>
       : <div>
           <h1>Today</h1>
                <p>{toDate(cityWeatherForecast[0].current.dt, cityWeatherForecast[0].timezone)}</p>
                <p>{cityWeatherForecast[0].current.weather[0].main}</p>
                <p>{toCelcius(cityWeatherForecast[0].current.temp)} °C</p>
        </div> 
        }
    </div>
   )
} 