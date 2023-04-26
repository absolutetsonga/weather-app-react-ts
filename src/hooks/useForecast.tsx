import {ChangeEvent,  useState} from "react";
import {Options} from "../types/Options";
import {Coords} from "../types/Coords";
import {CityProps} from "../props/CityProps";
import {ForecastProps} from "../props/ForecastProps";

export const useForecast = ({city, setCity}: CityProps, {forecast, setForecast}: ForecastProps) => {

    const key = 'df8dc7e1b071084a49440aa436f0e997';

    const [coords, setCoords] = useState<typeof Coords>(Coords);
    const [options, setOptions] = useState<[typeof Options]>([Options]);
    const [cityName, setCityName] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;

        setCityName(value);

        if (value.length < 2) return;

        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${key}`)
            .then(res => res.json())
            .then(data => setOptions(data))
    }

    const getOption = (name: string, lat: number, lon: number) => {
        setCityName(name)
        setOptions([Options])
        setCoords({lat, lon})
    }

    const getCityData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${key}&units=metric`)
            .then(res => res.json())
            .then(data => setCity(data))

        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${key}&units=metric`)
            .then(res => res.json())
            .then(data => setForecast(data))
    }

    return {
        cityName, setCityName,
        options, setOptions,
        coords, setCoords,
        city, setCity,
        forecast, setForecast,
        handleChange,
        getOption,
        getCityData
    }
}