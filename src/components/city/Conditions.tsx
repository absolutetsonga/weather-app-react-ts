import {Sun} from "./Sun";
import {Feels, Humidity, Wind, Pop, Pressure, Visibility} from "../../assets/imgs";
import {getHumidityValue, getPop, getVisibilityValue, getWindDirection} from "../../helpers/helper";
import {CityProps} from "../../props/CityProps";
import {ForecastProps} from "../../props/ForecastProps";

export const Conditions = ({city, setCity, forecast, setForecast}: CityProps & ForecastProps) => {
    return (
        <div className="flex flex-col w-full gap-10">
            <Sun city={city} setCity={setCity}/>
            <div className="flex justify-center flex-row flex-wrap gap-10">

                <div className="flex flex-col justify-between items-center h-[200px] w-[200px] text-2xl bg-blue-800 p-3 text-center rounded-2xl">
                    <div className="flex items-center text-xl gap-2">
                        <Wind/>
                        <p>Wind</p>
                    </div>
                    <p>{city.wind.speed}km/h</p>
                    <p>{getWindDirection(city.wind.deg)}{(city.wind.gust ? `, gusts: ${Math.round(city.wind.gust)} km/h` : ``)}</p>
                </div>

                <div className="flex flex-col justify-between items-center h-[200px] w-[200px] text-2xl bg-blue-800 p-3 text-center rounded-2xl">
                    <div className="flex items-center text-xl gap-2">
                        <Feels/>
                        <p>Feels Like</p>
                    </div>
                    <p>{Math.round(city.main.feels_like)}°C</p>
                    <p>Feels {
                        city.main.feels_like === city.main.temp
                            ? 'normal'
                            : city.main.feels_like > city.main.temp ? 'warmer' : 'colder'}</p>
                </div>

                <div className="flex flex-col justify-between items-center h-[200px] w-[200px] text-2xl bg-blue-800 p-3 text-center rounded-2xl">
                    <div className="flex items-center text-xl gap-2">
                        <Humidity/>
                        <p>Humidity</p>
                    </div>
                    <p>{city.main.humidity}%</p>
                    <p>{getHumidityValue(city.main.humidity)}</p>
                </div>

                <div className="flex flex-col justify-between items-center h-[200px] w-[200px] text-2xl bg-blue-800 p-3 text-center rounded-2xl">
                    <div className="flex items-center text-xl gap-2">
                        <Pop/>
                        <p>Precipitation</p>
                    </div>
                    <p>{forecast.list[0].pop}</p>
                    <p>{getPop(forecast.list[0].pop)}</p>
                </div>

                <div className="flex flex-col justify-between items-center h-[200px] w-[200px] text-2xl bg-blue-800 p-3 text-center rounded-2xl">
                    <div className="flex items-center text-xl gap-2">
                        <Pressure/>
                        <p>Pressure</p>
                    </div>
                    <p>{city.main.pressure} hPa</p>
                    <p>{city.main.pressure > 1013 ? 'Higher' : 'Lower'} than standard</p>
                </div>

                <div className="flex flex-col justify-between items-center h-[200px] w-[200px] text-2xl bg-blue-800 p-3 text-center rounded-2xl">
                    <div className="flex items-center text-xl gap-2">
                        <Visibility/>
                        <p>Visibility</p>
                    </div>
                    <p>{Math.round(city.visibility / 1000)} km</p>
                    <p>{getVisibilityValue(city.visibility)}</p>
                </div>

            </div>
        </div>
    )
}