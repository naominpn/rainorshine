import { useContext } from 'react'
import { WeatherContext} from './../WeatherContext';
import {toCelcius, toDate, getDay, toTime} from './../conversionFunctions'
import './CurrentWeather.css'

export default function CurrrentWeather() {
    const { cityWeatherForecast } = useContext(WeatherContext)
    if (cityWeatherForecast.length === 0) {
        return <div className="current-weather">
                <p></p>
        </div>;
    }

    var forecast = cityWeatherForecast[0];
    var current =  forecast.current;
    var timezone = forecast.timezone;
    var daily = forecast.daily[0];
    var weather = current.weather[0];

    return( 
    <div className="current-weather">
        <section className="current-section"> 
       {/* make into seperate component */}
                <div className="current-leftSide">
                    <p className="heading-date">
                        {getDay(current.dt, timezone)}, {toDate(current.dt, timezone)}
                    </p>
                    
                    <span className="span-now">Now:</span>

                    <div className="current-info">
                        <div className="icon-div">
                            <img className="current-icon" src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="" />
                        </div>
                        <div>
                            <p>{weather.main}</p>
                            <p>{toCelcius(current.temp)} °C</p>
                        </div>
                    </div>
                </div>


                <div className="current-rightSide">
                    <p className="today-info">{toCelcius(daily.temp.min)}°C 
                        <span className="label">High</span>
                    </p>
                    <p className="today-info">{daily.wind_speed} m/s 
                        <span className="label">Wind</span>
                    </p>
                    <p className="today-info">
                        {toTime(daily.sunrise, timezone)} 
                        <span className="label"> Sunrise</span>
                    </p>
                    <p className="today-info">{toCelcius(daily.temp.max)}°C 
                        <span className="label"> Low </span>
                    </p>
                    <p className="today-info">{Math.round(daily.pop*100)}% 
                        <span className="label"> Rain </span>
                    </p>
                    <p className="today-info">
                        {toTime(daily.sunset, timezone)} 
                        <span className="label">Sunset</span>
                    </p>
                </div>
        </section> 
    </div>
    )
} 