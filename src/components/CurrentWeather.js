import { useContext } from 'react'
import { WeatherContext} from './../WeatherContext';
import {toCelcius, toDate, getDay, toTime} from './../conversionFunctions'
import './CurrentWeather.css'

export default function CurrrentWeather() {
    const { cityWeatherForecast } = useContext(WeatherContext)
   return( 
   <div className="current-weather">
       {
       cityWeatherForecast.length === 0
       ? <p></p> //loading component
       : <section className="current-section"> 
       {/* make into seperate component */}
                <div className="current-leftSide">
                    <p className="heading-date">
                        {getDay(cityWeatherForecast[0].current.dt, cityWeatherForecast[0].timezone)}, {toDate(cityWeatherForecast[0].current.dt, cityWeatherForecast[0].timezone)}
                    </p>
                    
                    <span className="span-now">Now:</span>

                    <div className="current-info">
                        <div className="icon-div">
                            <img className="current-icon" src={`http://openweathermap.org/img/wn/${cityWeatherForecast[0].current.weather[0].icon}.png`} alt="" />
                        </div>
                        <div>
                            <p>{cityWeatherForecast[0].current.weather[0].main}</p>
                            <p>{toCelcius(cityWeatherForecast[0].current.temp)} °C</p>
                        </div>
                    </div>
                </div>


                <div className="current-rightSide">
                    <p className="today-info">{toCelcius(cityWeatherForecast[0].daily[0].temp.min)}°C 
                        <span className="label">High</span>
                    </p>
                    <p className="today-info">{cityWeatherForecast[0].daily[0].wind_speed}m/s 
                        <span className="label">Wind</span>
                    </p>
                    <p className="today-info">
                        {
                            toTime(cityWeatherForecast[0].daily[0].sunrise, 
                            cityWeatherForecast[0].timezone)
                        } 
                         <span className="label"> Sunrise</span>
                    </p>
                    <p className="today-info">{toCelcius(cityWeatherForecast[0].daily[0].temp.max)}°C 
                        <span className="label"> Low </span>
                    </p>
                    <p className="today-info">{Math.round(cityWeatherForecast[0].daily[0].pop*100)}% 
                        <span className="label"> Rain </span>
                    </p>
                    <p className="today-info">
                        {
                            toTime(cityWeatherForecast[0].daily[0].sunset, 
                            cityWeatherForecast[0].timezone)
                        } 
                         <span className="label">Sunset</span>
                    </p>
                </div>
        </section> 
        }
    </div>
   )
} 