import { useContext } from 'react'
import { WeatherContext} from './WeatherContext';
import DayWeather from './DayWeather';
import './WeekWeather.css'
import Slider from "react-slick";



export default function WeekWeather () {  
    const { cityWeatherForecast } = useContext(WeatherContext)
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    }

    return(
        <div >
            {
            cityWeatherForecast.length === 0
            ? <p></p>
            : 
                <div className="week-weather">
                  <Slider {...settings}>
                {cityWeatherForecast[0].daily.slice(1).map( (day, idx) => 
                    <DayWeather day={day} key={idx} />
                )}
                </Slider>
                </div>
            }
        </div>         
  )
}