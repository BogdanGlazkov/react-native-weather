import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  getWeatherApi,
  getForecastApi,
} from "../redux/weather/weatherOperations";
import {UseAppDispatch, UseAppSelector } from "../hooks";
import { Feather } from "@expo/vector-icons";
import WeatherDetails from "../components/WeatherDetails";
import Loader from "../components/Loader";

const HomeScreen = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const dataCurrent = UseAppSelector((state) => state.weather.currentWeather);
  const dataWeekly = UseAppSelector((state) => state.weather.weeklyWeather);
  const dispatch = UseAppDispatch();

  useEffect(() => {
    dispatch(getWeatherApi(query || "Kyiv"));
    dispatch(getForecastApi(query || "Kyiv"));
  }, []);

  const submit = () => {
    if (!query) return;
    dispatch(getWeatherApi(query));
    dispatch(getForecastApi(query));
    setQuery("");
  };

  if (dataCurrent && dataWeekly) {
    const {
      city,
      description: main,
      humidity,
      maxTemp: tempMax,
      minTemp: tempMin,
      pressure,
      temp,
      wind_speed: wind,
    } = dataCurrent;
    const date = new Date();
    const fullDate = date.toDateString();
    const hour = date.getHours();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weekData = [];

    for (let i = 7; i < dataWeekly.length; i += 8) {
      const date = new Date(dataWeekly[i].dt * 1000);
      const dayIndex = date.getUTCDay();
      weekData.push({
        day: dataWeekly[i].dt * 1000,
        dayOfTheWeek: days[dayIndex],
        temp: dataWeekly[i].main.temp,
        tempMax: dataWeekly[i].main.temp_max,
        tempMin: dataWeekly[i].main.temp_min,
        main: dataWeekly[i].weather[0].main,
        wind: dataWeekly[i].wind.speed,
        humidity: dataWeekly[i].main.humidity,
        pressure: dataWeekly[i].main.pressure,
      });
    }

    return (
      <View style={styles.container}>
        {/* Search */}
        <View style={styles.search}>
          <TextInput
            style={styles.searchInput}
            placeholder="Type city..."
            placeholderTextColor={"rgba(256,256,256,0.4)"}
            keyboardType="web-search"
            value={query}
            onChangeText={(val) => setQuery(val)}
          />
          <TouchableOpacity style={styles.searchBtn} onPress={submit}>
            <Feather name="search" size={24} color="rgba(256,256,256,0.6)" />
          </TouchableOpacity>
        </View>

        {/* Present Date */}
        <View style={styles.date}>
          <Text style={styles.dateText}>{fullDate}</Text>
        </View>

        {/* Current Location */}
        <View style={styles.location}>
          <Text style={styles.locationText}>{city}</Text>
        </View>

        {/* Icon */}
        <View style={styles.icon}>
          {hour > 5 && hour < 19 ? (
            <Image
              style={styles.iconImg}
              source={require(`../assets/images/sun.png`)}
            />
          ) : (
            <Image
              style={styles.iconImg}
              source={require(`../assets/images/moon.png`)}
            />
          )}
        </View>

        {/* WeatherDetails */}
        <WeatherDetails
          data={{ temp, tempMin, tempMax, main, humidity, wind, pressure }}
        />

        {/* 5 Day Weather Graph */}
        <View style={styles.calendar}>
          <View style={styles.calendarHeader}>
            <Feather name="calendar" size={24} color="rgba(256,256,256,0.6)" />
            <Text style={{ ...styles.weatherUppercase, marginLeft: 10 }}>
              Calendar
            </Text>
          </View>
          <View style={styles.calendarDays}>
            {weekData.map((el, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={styles.calendarDay}
                  onPress={() =>
                    navigation.navigate("ForecastScreen", {
                      city,
                      ...el,
                    })
                  }
                >
                  <Text style={styles.calendarText}>{el.dayOfTheWeek}</Text>
                  <Text style={styles.calendarTemp}>{parseInt(el.temp)}°C</Text>
                  <Text style={styles.calendarText}>{el.main}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    );
  } else {
    return <Loader />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#006B76",
  },
  search: {
    flexDirection: "row",
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    padding: 4,
    paddingLeft: 25,
    backgroundColor: "rgba(256,256,256,0.1)",
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    color: "rgba(256,256,256,0.9)",
  },
  searchBtn: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
  },
  date: {
    marginTop: "10%",
  },
  dateText: {
    color: "rgba(256,256,256,0.6)",
    fontSize: 16,
  },
  location: {
    marginTop: 3,
  },
  locationText: {
    color: "rgba(256,256,256,0.9)",
    fontSize: 36,
    fontWeight: "bold",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    marginVertical: 10,
  },
  iconImg: {
    height: 150,
    width: 150,
  },
  weatherUppercase: {
    color: "rgba(256,256,256,0.6)",
    fontSize: 18,
    alignSelf: "center",
    textTransform: "uppercase",
    fontWeight: "600",
    letterSpacing: 2,
  },
  calendar: {
    flex: 1,
  },
  calendarHeader: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 10,
  },
  calendarDays: {
    flex: 1,
    flexDirection: "row",
    width: "90%",
  },
  calendarDay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 75,
    height: 75,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(256,256,256,0.3)",
  },
  calendarText: {
    color: "rgba(256,256,256,0.6)",
  },
  calendarTemp: {
    fontSize: 16,
    fontWeight: "bold",
    color: "rgba(256,256,256,0.9)",
  },
});

export default HomeScreen;
