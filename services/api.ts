import axios from "axios";
import { API_KEY } from "../constants/keys";
import { IWeather } from "../redux/weather/weatherTypes";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherApi = (city: string) => async () => {
  const res = await axios.get<IWeather>(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  return res.data;
};

export const getForecastApi = (city: string) => async () => {
  const res = await axios.get<IWeather[]>(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );
  return res.data;
};
