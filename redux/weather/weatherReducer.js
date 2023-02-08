import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentWeather: null,
  weeklyWeather: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getWeather: (state, { payload }) => ({
      ...state,
      currentWeather: payload.currentWeather,
    }),
    getWeeklyWeather: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
});
