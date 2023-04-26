import {ForecastType} from "../types/ForecastType";
import {Dispatch, SetStateAction} from "react";

export type ForecastProps = {
    forecast: typeof ForecastType,
    setForecast: Dispatch<SetStateAction<typeof ForecastType>>
}