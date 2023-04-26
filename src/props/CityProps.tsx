import {CityType} from "../types/CityType";
import {Dispatch, SetStateAction} from "react";

export type CityProps = {
    city: typeof CityType,
    setCity: Dispatch<SetStateAction<typeof CityType>>
}