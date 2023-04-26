import {CityProps} from "../props/CityProps";
import {ForecastProps} from "../props/ForecastProps";
import {Heading} from "./city/Heading";
import {Forecast} from "./city/Forecast";
import {Conditions} from "./city/Conditions";

export const City = ({city, setCity, forecast, setForecast}: CityProps & ForecastProps) => {

    return (
        <div className="flex flex-col justify-center items-center gap-10">
            <Heading city={city} setCity={setCity} forecast={forecast} setForecast={setForecast}/>
            <Forecast forecast={forecast} setForecast={setForecast}/>
            <Conditions city={city} setCity={setCity} forecast={forecast} setForecast={setForecast}/>
        </div>
    )
}