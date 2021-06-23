import './App.scss';
import WeatherDisplay from './components/weatherDisplay/weatherDisplay.js';

let degrees = 28
let day = "23"
let month = "06"

function App() {
  return (
    <div className="App bg">
      <WeatherDisplay weather="Snow" degrees={degrees} day={day} month={month} desc="Light clouds"></WeatherDisplay>
    </div>
  );
}

export default App;
