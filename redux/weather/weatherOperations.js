import { Alert } from "react-native";
import { API_KEY } from "../../constants/keys";
import { weatherSlice } from "./weatherReducer";

const { getWeather, getWeeklyWeather } = weatherSlice.actions;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherApi = (city) => async (dispatch) => {
  try {
    const res = await fetch(
      `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const data = await res.json();
    const currentWeather = {
      city: data.name,
      description: data.weather[0].main,
      temp: data.main.temp,
      maxTemp: data.main.temp_max,
      minTemp: data.main.temp_min,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      wind_speed: data.wind.speed,
      wind_deg: data.wind.deg,
    };
    await dispatch(getWeather({ currentWeather }));
  } catch (error) {
    Alert.alert("Something went wrong. Try again, please");
    console.log("error.message: ", error.message);
  }
};

export const getForecastApi = (city) => async (dispatch) => {
  try {
    const res = await fetch(
      `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );
    const data = await res.json();
    const weeklyWeather = data.list;
    await dispatch(getWeeklyWeather({ weeklyWeather }));
  } catch (error) {
    Alert.alert("Something went wrong. Try again, please");
    console.log("error.message: ", error.message);
  }
};
