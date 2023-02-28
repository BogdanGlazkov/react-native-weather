import { Alert } from "react-native";
import { all, call, put, select, takeEvery } from "redux-saga/effects";
import { SET_QUERY, GET_CURRENT, GET_WEEKLY } from "../types";
import {
  getCurrentWeather,
  getWeeklyWeather,
  setError,
  WeatherActions,
} from "../weather/weatherActions";
import { getWeatherApi, getForecastApi } from "../../services/api";
import weatherSelectors from "../weather/weatherSelectors";

export function* workerGetCurrent() {
  try {
    const city = yield select(weatherSelectors.getQuery);
    const data = yield call(getWeatherApi(city));

    if (data.cod === "404") {
      Alert.alert("Sorry, there's no such city. Try again, please");
      yield put(setError(data.message));
      return;
    }
    if (data) {
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
      yield put(getCurrentWeather(currentWeather));
    }
  } catch (error) {
    Alert.alert("Something went wrong. Try again, please");
    yield put(setError(error.message));
  }
}

export function* workerGetWeekly() {
  try {
    const city = yield select(weatherSelectors.getQuery);
    const data = yield call(getForecastApi(city));

    if (!data.list) {
      yield put(setError(data.message));
      return;
    }
    if (data) {
      const weeklyWeather = data.list;
      yield put(getWeeklyWeather(weeklyWeather));
    }
  } catch (error) {
    Alert.alert("Something went wrong. Try again, please");
    yield put(setError(error.message));
  }
}

export function* watcherSaga() {
  console.log("Saga connected");
  yield all([
    takeEvery(SET_QUERY, workerGetCurrent),
    takeEvery(SET_QUERY, workerGetWeekly),
  ]);
}

export default function* rootSaga() {
  yield watcherSaga();
}
