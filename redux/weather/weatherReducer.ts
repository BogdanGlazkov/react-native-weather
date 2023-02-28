import {
  SET_QUERY,
  GET_CURRENT,
  GET_WEEKLY,
  SET_ERROR,
  SKIP_ERROR,
} from "../types";

const initialState = {
  currentWeather: null,
  weeklyWeather: null,
  query: "",
  error: null,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY:
      return { ...state, query: action.payload };
    case GET_CURRENT:
      return { ...state, error: null, currentWeather: action.payload };
    case GET_WEEKLY:
      return { ...state, error: null, weeklyWeather: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SKIP_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};
