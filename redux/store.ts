import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { weatherSlice } from "./weather/weatherReducer";

const rootReducer = combineReducers({
  [weatherSlice.name]: weatherSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
