import {ForecastProps} from "../../props/ForecastProps";

export const Forecast = ({forecast, setForecast}: ForecastProps) => {
    return (
        <div className="flex overflow-x-auto text-center max-w-[500px] gap-3">
            {forecast.list.map((day, index) => {
                return (
                    <div key={index} className="flex flex-shrink-0 p-2">
                        <div className="inline-block flex flex-col justify-center items-center w-[70px]">
                            <p className="text-xl">
                                {new Intl.DateTimeFormat(undefined,
                                    {weekday: "short"}
                                ).format(day.dt * 1000)}
                            </p>

                            <p>
                                {new Intl.DateTimeFormat(undefined,
                                    {
                                        hour: "numeric",
                                        minute: 'numeric',
                                        hour12: false
                                    }).format(day.dt * 1000)}
                            </p>

                            <img
                                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                                alt={day.weather[0].main}
                                className="w-[70px] h-[70px]"
                            />
                            <p>{day.weather[0].main}</p>
                            <p className="text-xl">{Math.round(day.main.temp)}°</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}