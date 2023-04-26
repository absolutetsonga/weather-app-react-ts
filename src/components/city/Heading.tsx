import {CityType} from "../../types/CityType";
import {CityProps} from "../../props/CityProps";
import {useForecast} from "../../hooks/useForecast";
import {ForecastProps} from "../../props/ForecastProps";

export const Heading = ({city, setCity}: CityProps & ForecastProps) => {
    return (
        <div>
            <div className="flex flex-col items-center text-center">
                <div>
                    {
                        city.weather.map(el => (
                            <div className="flex items-center" key={el.id}>
                                <img src={`https://openweathermap.org/img/wn/${el.icon}@2x.png`}
                                     alt={el.main}
                                />
                                <p className="text-3xl">{`${el.main} (${el.description})`}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-2xl">{city.name}</h1>
                    <h2 className="text-xl">{Math.round(city.main.temp)}°C</h2>
                    <p className="text-xl">{`Highest: ${Math.round(city.main.temp_max)}°C Lowest: ${Math.round(city.main.temp_min)}°C`}</p>
                </div>
            </div>

        </div>
    )
}