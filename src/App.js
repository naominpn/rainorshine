import './App.css';
import Header from './Header.js'
import LocationSelect from './LocationSelect';
import CurrrentWeather from './CurrentWeather';
import WeekWeather from './WeekWeather';
import HeadingWeek from './HeadingWeek'


function App() {
  return (
    <div className="App">
        <Header />
        <div className="Main">
          <LocationSelect/>
          <CurrrentWeather/>
          <HeadingWeek />
          <WeekWeather/>
        </div>
    </div>
  );
}

export default App;
