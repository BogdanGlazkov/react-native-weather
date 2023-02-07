import { createSlice } from "@reduxjs/toolkit";

const a = {
  city: "Kyiv",
  description: "Clear",
  humidity: 84,
  maxTemp: -5.71,
  minTemp: -5.77,
  pressure: 1041,
  temp: -5.71,
  wind_deg: 343,
  wind_speed: 0.89,
};
const initialState = {
  currentWeather: a,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getWeather: (state, { payload }) => ({
      ...state,
      currentWeather: payload.currentWeather,
    }),
  },
});
