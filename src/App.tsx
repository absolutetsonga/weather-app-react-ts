import './App.css'
import {Search} from "./components/Search";
import {City} from "./components/City";
import {useState} from "react";
import {CityType} from "./types/CityType";
import {ForecastType} from "./types/ForecastType";

function App() {
    const [city, setCity] = useState<typeof CityType>(CityType);
    const [forecast, setForecast] = useState<typeof ForecastType>(ForecastType)

    return (
        <div className="flex justify-center items-center bg-blue-950 min-w-full min-h-[100vh]">
            <div className="max-w-[500px] text-white font-semibold">
                {
                    city.sys.country
                        ? (<City city={city} setCity={setCity} forecast={forecast} setForecast={setForecast}/>)
                        : (<Search city={city} setCity={setCity} forecast={forecast} setForecast={setForecast}/>)
                }
            </div>
        </div>
  )
}

export default App
