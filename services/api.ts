import { API_KEY } from "../constants/keys";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherApi = (city: string) => async () => {
  const res = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  return await res.json();
};

export const getForecastApi = (city: string) => async () => {
  const res = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );
  return await res.json();
};
