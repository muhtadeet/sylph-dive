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
      className="border-none bg-background/60 dark:bg-default-100/50 w-[70%] p-5 m-5 flex justify-center items-center"
      shadow="sm"
    >
      <CardBody>
        {/* <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              width={200}
              src="/cloudy.png"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex">
              <div className="flex flex-col">
                <div className="flex flex-row justify-center">
                  <p className="font-semibold text-3xl text-foreground/90">{name}</p>
                  <p className="text-3xl text-foreground/80">{temp} °C</p>
                </div>

                <h1 className="text-large font-medium mt-2">Frontend Radio</h1>
              </div>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <Slider
                aria-label="Music progress"
                classNames={{
                  track: "bg-default-500/30",
                  thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                }}
                color="foreground"
                defaultValue={33}
                size="sm"
              />
              <div className="flex justify-between">
                <p className="text-small">1:23</p>
                <p className="text-small text-foreground/50">4:32</p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="flex items-start justify-around gap-4">
          <div className="flex flex-col justify-around gap-2">
            <h1 className="text-6xl font-black">{temp}°</h1>
            <p className="text-xl">{status}</p>
            <p className="text-xl">{name}📍</p>
            <p className="text-sm">
              {tempMax}° / {tempMin}°
            </p>
            <p className="text-sm">Feels Like {feelsLike}°</p>
          </div>
          <Image alt="Status" src="/cloudy.png" width={100} height={100} />
        </div>
      </CardBody>
      <CardFooter className="flex items-center justify-around">
        <div className="flex flex-row gap-20">
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
