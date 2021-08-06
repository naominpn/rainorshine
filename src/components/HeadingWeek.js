import { useContext } from 'react'
import { WeatherContext} from './../WeatherContext';

export default function HeadingWeek() {
    const { cityWeatherForecast } = useContext(WeatherContext)
    return( 
        <div>
            {
            cityWeatherForecast.length === 0
            ? <h1></h1>
            :<h1 className="heading-week">7 day forecast</h1>
            }
        </div>
    )
}