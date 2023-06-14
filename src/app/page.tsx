"use client";
import React, { useState } from "react";
import { WEATHER_API, WEATHER_URL } from "../utils/api";
import SearchWeather from "../components/search_weather";
import CurrentWeather from "@/components/current_weather";
import { ForecastWeather } from "@/components/forecast_weather";

interface SearchProps {
  onSearchChange: (
    event: { value: string; label: string } | null | any
  ) => void;
}

function App() {
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [forecastWeather, setForecastWeather] = useState<any>(null);
  const [count, setCount] = useState(0);

  const handleOnSearchChange: SearchProps["onSearchChange"] = (event) => {
    // console.log(e);
    if (typeof event === "string" || event === null) {
      setCurrentWeather(null);
      setForecastWeather(null);
    } else {
      const [lat, lon] = event.value.split(" ");

      const fetchCurrentWeather = fetch(
        `${WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API}&units=metric`
      );

      const fetchForecastWeather = fetch(
        `${WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API}&units=metric`
      );

      Promise.all([fetchCurrentWeather, fetchForecastWeather])
        .then(async (response) => {
          const responseWeather = await response[0].json();
          const responseForecast = await response[1].json();

          setCurrentWeather({ city: event.label, ...responseWeather });
          setForecastWeather({ city: event.label, ...responseForecast });
        })
        .catch((err) => console.error(err));
    }
  };

  //console.log(forecastWeather);

  return (
    <>
      <div>
        <SearchWeather onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecastWeather && <ForecastWeather data={forecastWeather} />}
      </div>
    </>
  );
}

// const renderingApp = () => {
//   useClient()
// }
export default App;
