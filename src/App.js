import { useState } from 'react'
import './App.css';
import LocationSelect from './LocationSelect.js'
import CurrrentWeather from './CurrentWeather.js';
import axios from 'axios'


const data = {
  'sydney': 
    {lat: -33.8679,
    lon: 151.2073},

  'tokyo': 
    {lat: 35.6895,
    lon: 139.6917},
  
  'los angeles': 
    {lat: 34.0522,
    lon: -118.2437,

  'london': 
    {lat: 51.5085,
    lon: -0.1257,},

  'paris': 
    {lat: 48.8534,
    lon: 2.3488}
}

function CurrentWeather() {
  const [currentWeather, setCurrentWeather] = useState([])
  
}


  const handleChange = e => {
    var location = e.target.value

      axios
          .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${dataźlocation].lat}&lon=${data[location].lon}&exclude=hourly,minutely&appid=8404fc7b2bbd4a1a4d6a797d61b3cbb0`)
          .then(res => {
            ` saz`(res.data)
          })
  }


function App() {
  return (
    <div className="App">
        {/* <Heading /> */}
        <div className='location-select'>
            <select onChange={handleChange} name="" id="">
                <option value="sydney">Sydney</option>
                <option value="tokyo">Tokyo</option>
                <option value="los angeles">Los Angeles </option>
                <option value="london">London</option>
                <option value="paris">Paris</option>
            </select>
        </div>

        <div className="current-weather">
  
        </div>

        {/* <CurrrentWeather /> */}

        {/* <div className="weather-week">
        <WeatherDayCard />
        <WeatherDayCard />
        <WeatherDayCard />
        <WeatherDayCard />
        <WeatherDayCard />

        </div> */}

    </div>
  );
}

export default App;
