import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Search from "../components/search_weather";
import Layout from "../components/layout";
import { WEATHER_API, WEATHER_URL } from "../utils/api";

interface SearchProps {
  onSearchChange: (e: { value: string; label: string } | null) => void;
}


function App() {
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [forecastWeather, setForecastWeather] = useState<any>(null);
  const [count, setCount] = useState(0);

  const handleOnSearchChange: SearchProps["onSearchChange"] = (e) => {
    console.log(e);
    if (typeof e === "string" || e === null) {
      setCurrentWeather(null);
      setForecastWeather(null);
    } else {
      const [lat, lon] = e.value.split(" ");

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

          setCurrentWeather({ city: e.label, ...responseWeather });
          setForecastWeather({ city: e.label, ...responseForecast });
        })
        .catch((err) => console.error(err));
    }
  };

  console.log(forecastWeather);

  return (
    <Layout>
      <div>
        <Search onSearchChange={handleOnSearchChange} />
        {/* {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecastWeather && <ForecastWeather data={forecastWeather} />} */}
      </div>
    </Layout>
  );
}

export default App;
