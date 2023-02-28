import {
  SET_QUERY,
  GET_CURRENT,
  GET_WEEKLY,
  SET_ERROR,
  SKIP_ERROR,
} from "../types";

export function setQuery(city: string) {
  return {
    type: SET_QUERY,
    payload: city,
  };
}

export function getCurrentWeather(currentWeather: [any]) {
  return {
    type: GET_CURRENT,
    payload: currentWeather,
  };
}

export function getWeeklyWeather(weeklyWeather: [any]) {
  return {
    type: GET_WEEKLY,
    payload: weeklyWeather,
  };
}

export function setError(error: string) {
  return (dispatch) => {
    dispatch({
      type: SET_ERROR,
      payload: error,
    });
  };
}

export function skipError() {
  return {
    type: SKIP_ERROR,
  };
}

export type WeatherActions =
  | typeof setQuery
  | typeof getCurrentWeather
  | typeof getWeeklyWeather
  | typeof setError;
