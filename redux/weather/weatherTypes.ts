import { SET_QUERY, GET_CURRENT, GET_WEEKLY, SET_ERROR } from "../types";

export interface IWeather {
  data: any[];
}

export interface IWeatherData {
  city: string;
  description: string;
  temp: number;
  maxTemp: number;
  minTemp: number;
  humidity: number;
  pressure: number;
  wind_speed: number;
  wind_deg: number;
}

export interface IWeatherState {
  currentWeather: IWeather[];
  weeklyWeather: IWeather[];
  query: string;
  error: string | null;
}

export interface IGetCurrent {
  type: typeof GET_CURRENT;
  payload: IWeather;
}

export interface IGetWeekly {
  type: typeof GET_WEEKLY;
  payload: string;
}

export interface IWeatherCurrent {
  currentWeather: IWeather[];
}

export interface IWeatherWeekly {
  weeklyWeather: IWeather[];
}

export interface IWeatherError {
  type: typeof SET_ERROR;
  error: string;
}
