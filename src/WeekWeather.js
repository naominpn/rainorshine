import { useContext } from 'react'
import { WeatherContext} from './WeatherContext';
import DayWeather from './DayWeather';
import './WeekWeather.css'
import OverflowScrolling from 'react-overflow-scrolling';


export default function WeekWeather () {  
    const { cityWeatherForecast } = useContext(WeatherContext)

    return(
        <div >
            {
            cityWeatherForecast.length === 0
            ? <p></p>
            : <section className="overflow-scrolling">
                <div className="week-weather">
                
                {cityWeatherForecast[0].daily.slice(1).map( (day, idx) => 
                    <DayWeather day={day} key={idx} />
                )}
                </div>
            </section>
            }
        </div>         
  )
}