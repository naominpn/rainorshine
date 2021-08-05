import { useContext } from 'react'
import { WeatherContext} from './WeatherContext';
import {toCelcius, toDate} from './conversionFunctions'

export default function DayWeather(props) {
    const { cityWeatherForecast } = useContext(WeatherContext)

   return( 
        <div className="day-weather" key={props.idx}>
            <p>{toDate(props.day.dt, cityWeatherForecast[0].timezone)}</p>
            <p>{props.day.weather[0].main}</p>                  
            <p>{toCelcius(props.day.temp.day)}°C</p>
        </div>
    )
}