import React from "react";


interface CurrentWeatherProps {
    city: string,
    weather: {
        description: string,
        icon: string,
    }[],
    main: {
        temp: number,
        feels_like: number,
        humidity: number,
        pressure: number,
    }
    wind: {
        speed: number,
    }
}

interface MyComponentProps {
    data: CurrentWeatherProps
}
const CurrentWeather: React.FC<MyComponentProps> = ({ data }) => {
    return (
        <>
            <div className="flex flex-col gap-10  px-5 pt-0 pb-5 bg-card p-2 mx-auto mt-6 mb-0 w-96 rounded-xl  ">
                <div className="flex-row-reverse flex gap-8 mt-4 text-center">
                    <div className="flex flex-col gap-1 justify-center">
                        <h1 className="text-lg font-bold ">{data.city}</h1>
                        <p>{data.weather[0].description}</p>
                    </div>
                    <div className="flex justify-center flex-col items-center gap-5 ">
                        <img
                            alt="weather"
                            className="p-2"
                            src={`/icons/${data.weather[0].icon}.png`}
                        />
                    </div>
                </div>
                <div className="flex justify-between mx-7 font-bold items-center text-sm flex-row">
                    <p className="text-5xl ">{`${Math.round(data.main.temp)}`}°C</p>
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <p>Label</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Feels Like :</p>
                            <p>{`${Math.round(data.main.feels_like)}°C`}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Wind :</p>
                            <p>{`${data.wind.speed} m/s`}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Humidity :</p>
                            <p>{`${data.main.humidity}%`}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Preasure :</p>
                            <p>{`${data.main.pressure} hPa`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CurrentWeather;
