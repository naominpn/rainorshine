import { useContext } from 'react'
import { WeatherContext} from './WeatherContext';
import {toCelcius, toDate, getDay} from './conversionFunctions'
import './DayWeather.css'



export default function DayWeather(props) {
    const { cityWeatherForecast } = useContext(WeatherContext)

   return( 
        <div className="day-weather" key={props.idx}>
            <p>{getDay(props.day.dt, cityWeatherForecast[0].timezone)}</p>
            <p>{toDate(props.day.dt, cityWeatherForecast[0].timezone)}</p>
            <p>{props.day.weather[0].main}</p>                  
            <p>{toCelcius(props.day.temp.day)}°C</p>
        </div>
    )
}