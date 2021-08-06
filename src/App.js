import './App.css';
import Header from './components/Header'
import LocationSelect from './components/LocationSelect';
import CurrrentWeather from './components/CurrentWeather';
import HeadingWeek from './components/HeadingWeek'
import WeekWeather from './components/WeekWeather';

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

        <p>made by naominp on <a href="https://github.com/naominpn/rainorshine">github</a></p>
    </div>
  );
}

export default App;
