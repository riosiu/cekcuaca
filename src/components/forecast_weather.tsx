import React, { FC } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

interface ForecastWeatherProps {
  list: any;
  weather: string | any;
  main: {
    temp_min: number;
    temp_max: number;
  };
}
interface ForecastComponentProps {
  data: ForecastWeatherProps;
}
const WEEKS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
export const ForecastWeather: FC<ForecastComponentProps> = ({ data }) => {
  const dayinWeek = new Date().getDay();
  const forecastDays = WEEKS.slice(dayinWeek, WEEKS.length).concat(
    WEEKS.slice(0, dayinWeek)
  );

  // console.log(forecastDays);
  return (
    <>
      <div className="flex justify-center flex-col mx-10 my-8">
        <h1 className="text-xl font-semibold my-2">All Weather in the Week!</h1>
        <Accordion allowZeroExpanded>
          {data.list
            .splice(0, 7)
            .map((item: ForecastWeatherProps, index: number) => (
              <AccordionItem
                key={index}
                className="hover:bg-primary hover:p-2 hover:rounded-xl"
              >
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="gap-4 flex flex-row justify-between text-center pr-4 py-2 h-9 m-1 rounded-xl mx-auto">
                      <div className="flex flex-row-reverse items-center gap-3">
                        <label htmlFor="">{forecastDays[index]}</label>
                        <img
                          className="w-10"
                          src={`icons/${item.weather[0].icon}.png`}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-row gap-3 items-center">
                        <span className="hover:bg-blue-900 hover:font-extrabold p-2 rounded-md flex items-center">
                          {item.weather[0].description}
                        </span>
                        <span>
                          {item.main.temp_min}/{Math.round(item.main.temp_max)}{" "}
                          °C
                        </span>
                      </div>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel></AccordionItemPanel>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </>
  );
};
