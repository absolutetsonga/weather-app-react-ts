import {useForecast} from "../hooks/useForecast";
import {CityProps} from "../props/CityProps";
import {ForecastProps} from "../props/ForecastProps";

export const Search = ({city, setCity, forecast, setForecast}: CityProps & ForecastProps) => {
    const {cityName, options, handleChange, getOption, getCityData} = useForecast({city, setCity}, {forecast, setForecast});

    return (
        <div className="flex flex-col justify-center items-center gap-5 text-center text-lg">
            <h1 className="text-3xl">Weather Forecast</h1>
            <p>Enter below a place you want to know the weather of and select an opton from dropdown</p>
            <div className="flex gap-4">
                <input
                    className="text-black p-2 text-xl"
                    type="text"
                    value={cityName}
                    onChange={handleChange}
                    placeholder="ex: Astana"
                />
                <button
                    className="border-2 border-dashed p-3"
                    onClick={getCityData}>Search</button>
            </div>

            <ul className="flex flex-col text-left p-1 gap-2 cursor-pointer">
                {
                    options.map((option, index) => {
                        return (
                            <li
                                key={index}
                                className="mx-[-180px] text-white text-left hover:text-blue-200"
                                onClick={() => {
                                    getOption(option.name, option.lat, option.lon)
                                    getCityData();
                                }}
                            >
                                {
                                    `${option.name} 
                                    ${option.state 
                                        ? `(${option.country}, ${option.state})` 
                                        : option.country ? `(${option.country})` : ''}`

                                }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}