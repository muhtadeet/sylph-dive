import React from "react";
import { Card, CardBody, CardFooter, Slider } from "@nextui-org/react";
import Image from "next/image";

interface CardProps {
  name: string;
  status: string;
  temp: string;
  tempMin: string;
  tempMax: string;
  humidity: number;
  feelsLike: string;
  wind: number;
}

export default function WeatherCard({
  name,
  status,
  temp,
  tempMin,
  tempMax,
  humidity,
  feelsLike,
  wind,
}: CardProps) {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 w-[70%] sm:max-w-xl md:max-w-3xl p-5 m-5 flex justify-center items-center"
      shadow="sm"
    >
      <CardBody>
        <div className="flex items-start justify-around gap-4 sm:gap-40 md:gap-52 xl:gap-80">
          <div className="flex flex-col justify-around gap-2">
            <h1 className="text-6xl font-black">{temp}°</h1>
            <p className="text-xl">{status}</p>
            <p className="text-xl">{name}📍</p>
            <p className="text-sm">
              {tempMax}° / {tempMin}°
            </p>
            <p className="text-sm">Feels Like {feelsLike}°</p>
          </div>
          <Image
            alt="Status"
            src={
              status === "Clear"
                ? "/clear.png"
                : status === "Clouds"
                ? "/cloudy.png"
                : status === "Rain"
                ? "/rain.png"
                : status === "Haze"
                ? "/haze.png"
                : status === "Thunderstorm"
                ? "/tstorm.png"
                : status === "Snow"
                ? "/snow.png"
                : "/cloudy.png"
            }
            width={100}
            height={100}
            className="sm:w-32 sm:h-32 md:w-44 md:h-44 xl:w-52 xl:h-52"
          />
        </div>
      </CardBody>
      <CardFooter className="flex items-center justify-around">
        <div className="flex flex-row gap-20 sm:gap-52 md:gap-72 xl:gap-96">
          <p className="text-sm">
            Humidity:
            <br /> {humidity} %
          </p>
          <p className="text-sm">
            Wind:
            <br /> {wind} m/s
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
