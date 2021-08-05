import { useContext } from 'react'
import { WeatherContext} from './WeatherContext';
import DayWeather from './DayWeather';

export default function WeekWeather () {  
    const { cityWeatherForecast } = useContext(WeatherContext)

    return(
        <div className="week-weather">
            {
            cityWeatherForecast.length === 0
            ? <p></p>
            : <section>
            <h1>7 day forecast</h1>
            {cityWeatherForecast[0].daily.slice(1).map( (day, idx) => 
                <DayWeather day={day} key={idx} />
            )}
            </section>
            }
        </div>         
  )
}