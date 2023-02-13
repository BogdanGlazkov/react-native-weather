import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentWeather: null,
  weeklyWeather: null,
  error: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getWeather: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    getWeeklyWeather: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    setError: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
});
