import React, {useState, createContext} from "react";
import axios from 'axios'
import data from './data.js'
export const WeatherContext = createContext();


export function WeatherProvider(props) {
    const [cityWeatherForecast, setCityWeatherForecast] = useState([])

    const handleChange = e => {
        var location = e.target.value;
        if (!!location) {
          axios
              .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${data[location].lat}&lon=${data[location].lon}&exclude=hourly,minutely&appid=8404fc7b2bbd4a1a4d6a797d61b3cbb0`)
              .then(res => {
                // console.log(res.data)
                setCityWeatherForecast([res.data])
              })
        } else {
          setCityWeatherForecast([])
        }
      }

    return <WeatherContext.Provider value={{cityWeatherForecast, handleChange}}>
        {props.children}
    </WeatherContext.Provider>
}