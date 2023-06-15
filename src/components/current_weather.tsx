import React, { useEffect } from "react";
import {
  WiBarometer,
  WiCelsius,
  WiHumidity,
  WiStrongWind,
  WiUmbrella,
} from "react-icons/wi";
interface CurrentWeatherProps {
  city: string;
  weather: {
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
}

interface MyComponentProps {
  data: CurrentWeatherProps;
}
const CurrentWeather: React.FC<MyComponentProps> = ({ data }) => {
  useEffect(() => {
    console.log(data);
  });
  return (
    <>
      <div className="card flex flex-col gap-10  px-5 pt-0 pb-5 bg-card p-2 mx-auto mt-6 mb-0 w-96 rounded-xl  ">
        <div className="flex flex-row justify-between mx-3 mt-7">
          <span className=" text-sm font-bold ">
            {data.city.substring(0, data.city.indexOf(","))} <br />
            {data.city.substring(data.city.indexOf(",") + 1)}
          </span>
          <span className="text-3xl ">{`${Math.round(data.main.temp)}`}°C</span>
        </div>
        <div className="flex-col flex items-center">
          <img
            alt="weather"
            className="w-60 items-center flex"
            src={`/icons/${data.weather[0].icon}.png`}
          />
        </div>
        <div className="flex mx-2 font-bold card items-center text-sm flex-row">
          <div className="flex flex-row gap-1">
            <div className="flex flex-col items-center gap-4 p-1 hover:bg-slate-800 hover:rounded-xl">
              <WiUmbrella size={50} />
              <span className="text-xs text-center">
                {data.weather[0].description}
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 p-1 hover:bg-slate-800 hover:rounded-xl">
              <WiCelsius size={50} />
              <span className="text-xs text-center">{`${Math.round(
                data.main.feels_like
              )}°C`}</span>
            </div>
            <div className="flex flex-col items-center gap-4 p-1 hover:bg-slate-800 hover:rounded-xl">
              <WiBarometer size={50} />
              <span className="text-xs text-center">{`${data.wind.speed} m/s`}</span>
            </div>
            <div className="flex flex-col items-center gap-4 p-1 hover:bg-slate-800 hover:rounded-xl">
              <WiHumidity size={50} />
              <span className="text-xs text-center">{`${data.main.humidity}%`}</span>
            </div>
            <div className="flex flex-col items-center gap-4 p-1 hover:bg-slate-800 hover:rounded-xl">
              <WiStrongWind size={50} />
              <span className="text-xs text-center">{`${data.main.pressure} hPa`}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
