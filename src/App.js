import { useContext } from 'react'
import { WeatherContext } from './WeatherContext';

import './App.css';
// import LocationSelect from './LocationSelect.js'
// import CurrrentWeather from './CurrentWeather.js';


function App() {
  const {
    cityWeatherForecast, 
    handleChange
  } = useContext(WeatherContext)

  const toDate = (dt, timeZone) => {
    const options = { timeZone: timeZone, weekday: "long", year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dt*1000).toLocaleString('en-AU', options)
  } 

  const toCelcius = (tempK) => {
    return (tempK - 273.15).toFixed(2)
  }
  
  return (
    <div className="App">
        {/* <Heading /> */}
        <div className='location-select'>
            <select onChange={handleChange} name="" id="">
                <option value="">-- Select City</option>
                <option value="sydney">Sydney</option>
                <option value="tokyo">Tokyo</option>
                <option value="los angeles">Los Angeles </option>
                <option value="london">London</option>
                <option value="paris">Paris</option>
            </select>
        </div>


        <div className="current-weather">
          {
            cityWeatherForecast.length === 0
            ? <p></p>
            : <div>
                <h1>Today</h1>
                <p>{toDate(cityWeatherForecast[0].current.dt, cityWeatherForecast[0].timezone)}</p>
                <p>{cityWeatherForecast[0].current.weather[0].main}</p>
                <p>{toCelcius(cityWeatherForecast[0].current.temp)} °C</p>
              </div> 
          }
        </div>


        <div className="week-weather">
          {
            cityWeatherForecast.length === 0
            ? <p></p>
            : <div className="days-weather">
                <h1>7 day forecast</h1>
                
                  {cityWeatherForecast[0].daily.slice(1).map( (day, idx) => 
                    <div key={idx}>
                      <p>{toDate(day.dt, cityWeatherForecast[0].timezone)}</p>
                      <p>{day.weather[0].main}</p>                  
                      <p>{toCelcius(day.temp.day)}°C</p>
                    </div>
                    )
                  }
              </div> 
          }
        </div>

    </div>
  );
}

export default App;
