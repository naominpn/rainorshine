import './App.css';
import Header from './Header.js'
import LocationSelect from './LocationSelect';
import CurrrentWeather from './CurrentWeather';
import WeekWeather from './WeekWeather';


function App() {
  return (
    <div className="App">
        <Header />
        <div className="Main">
          <LocationSelect/>
          <CurrrentWeather/>
          <WeekWeather/>
          </div>
    </div>
  );
}

export default App;
