import './App.css';
import Header from './Header.js'
import LocationSelect from './LocationSelect';
import CurrrentWeather from './CurrentWeather';
import HeadingWeek from './HeadingWeek'
import WeekWeather from './WeekWeather';

function App() {
  return (
    <div className="App">
        
        <div className="Main">
          <Header />
          <LocationSelect/>
          <CurrrentWeather/>
          <HeadingWeek />
          <WeekWeather/>
        </div>
    </div>
  );
}

export default App;
