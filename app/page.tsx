import Card from "../components/Card";
import Search from "@/components/Search";

interface WeatherData {
  weather: {
    main: string;
  };
  main: {
    temp: number;
    temp_min: string;
    temp_max: string;
    humidity: number;
    feels_like: string;
  };
  wind: {
    speed: number;
  };
  name: string;
}

interface Params {
  params: { cityName: string };
}

export default async function Home({ params }: Params) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  async function getWeather(cityName: string): Promise<WeatherData> {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  }
  const weather = await getWeather(params.cityName);

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gradient-to-bl from-purple-300 from-40% via-purple-200 to-purple-50 h-screen w-full">
        <Search />
        <Card
          name={weather.name}
          temp={weather.main.temp.toFixed(0)}
          status={weather.weather[0].main}
          tempMax={weather.main.temp_max.toFixed(0)}
          tempMin={weather.main.temp_min.toFixed(0)}
          feelsLike={weather.main.feels_like.toFixed(0)}
          wind={weather.wind.speed}
          humidity={weather.main.humidity}
        ></Card>
      </div>
    </>
  );
}
