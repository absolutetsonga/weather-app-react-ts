import {Sunrise, Sunset} from "../../assets/imgs";
import {CityProps} from "../../props/CityProps";

export const Sun = ({city, setCity}: CityProps) => {
    return (
        <div className="flex justify-center items-center text-center text-xl">
            <div className="flex flex-col justify-center items-center w-1/2 gap-2">
                <Sunrise/>
                {new Intl.DateTimeFormat(undefined,
                    {
                        hour: "numeric",
                        minute: 'numeric',
                        hour12: false
                    }).format(city.sys.sunrise * 1000)}
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 gap-2">
                <Sunset/>
                {new Intl.DateTimeFormat(undefined,
                    {
                        hour: "numeric",
                        minute: 'numeric',
                        hour12: false
                    }).format(city.sys.sunset * 1000)}
            </div>
        </div>
    )
}