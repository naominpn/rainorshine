import { useContext } from 'react'
import { WeatherContext} from './../WeatherContext';
import {toCelcius, toDate, getDay} from './../conversionFunctions'
import './DayWeather.css'

export default function DayWeather(props) {
    const { cityWeatherForecast } = useContext(WeatherContext)
    const icon = `http://openweathermap.org/img/wn/${props.day.weather[0].icon}.png`

    return( 
        <div className="day-weather" key={props.idx}>
            <p className="theDay">{getDay(props.day.dt, cityWeatherForecast[0].timezone)}</p>
            <p>{toDate(props.day.dt, cityWeatherForecast[0].timezone)}</p>
            <p>{props.day.weather[0].main}</p>
            <img className="icon" src={icon} alt="" />                  
            <p>{toCelcius(props.day.temp.day)}°C</p>
        </div>
    )
}


