import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  getWeatherApi,
  getForecastApi,
} from "../redux/weather/weatherOperations";
import { Feather } from "@expo/vector-icons";
import Loader from "../components/Loader";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.weather.currentWeather);
  const dataWeekly = useSelector((state) => state.weather.weeklyWeather);
  const query = "Kyiv";

  useEffect(() => {
    dispatch(getWeatherApi(query));
    dispatch(getForecastApi(query));
  }, []);

  if (data && dataWeekly) {
    const {
      city,
      description,
      humidity,
      maxTemp,
      minTemp,
      pressure,
      temp,
      wind_deg,
      wind_speed,
    } = data;
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
        temp: parseInt(dataWeekly[i].main.temp),
        tempMax: parseInt(dataWeekly[i].main.temp_max),
        tempMin: parseInt(dataWeekly[i].main.temp_min),
        main: dataWeekly[i].weather[0].main,
        wind: parseInt(dataWeekly[i].wind.speed),
        humidity: dataWeekly[i].main.humidity,
        pressure: dataWeekly[i].main.pressure,
      });
    }

    return (
      <View style={styles.container}>
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

        {/*Temprature */}
        <View>
          <Text style={styles.temp}>
            {parseInt(temp)}
            <Text style={styles.tempSign}>°C</Text>
          </Text>
          <View style={styles.tempSub}>
            <Text style={styles.tempSubtext}>
              Min {parseInt(minTemp)} Max {parseInt(maxTemp)}
            </Text>
          </View>
        </View>

        {/*Weather Condition */}
        <View>
          <Text style={styles.weatherUppercase}>{description}</Text>
        </View>

        {/*Other Weather Data */}
        <View style={styles.otherData}>
          <View style={styles.humidity}>
            <Text style={styles.otherDataValueText}>
              {humidity} <Text style={styles.unitText}>%</Text>
            </Text>
            <Text style={styles.otherDataText}>Humidity</Text>
          </View>
          <View style={styles.pressure}>
            <Text style={styles.otherDataValueText}>
              {parseInt(wind_speed)} <Text style={styles.unitText}>km/h</Text>
              {/* {wind_deg} <Text style={styles.unitText}>'</Text> */}
            </Text>
            <Text style={styles.otherDataText}>Wind</Text>
          </View>
          <View style={styles.windSpeed}>
            <Text style={styles.otherDataValueText}>
              {pressure} <Text style={styles.unitText}>hPa</Text>
            </Text>
            <Text style={styles.otherDataText}>Pressure</Text>
          </View>
        </View>

        {/* 5 Day Weather Graph */}
        <View style={styles.calendar}>
          <View style={styles.calendarHeader}>
            <Feather name="calendar" size={24} color="rgba(256,256,256,0.6)" />
            <Text style={{ ...styles.weatherUppercase, marginLeft: 10 }}>
              Calendar
            </Text>
          </View>
          <View style={styles.calendarDays}>
            {weekData.map((el) => {
              return (
                <TouchableOpacity
                  style={styles.calendarDay}
                  onPress={() =>
                    navigation.navigate("Week", {
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
    paddingVertical: 10,
    backgroundColor: "#006B76",
  },
  date: {
    marginTop: "15%",
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
  temp: {
    color: "rgba(256,256,256,0.9)",
    fontSize: 60,
    alignSelf: "center",
  },
  tempSign: {
    color: "rgba(256,256,256,0.4)",
  },
  tempSub: {
    color: "rgba(256,256,256,0.4)",
  },
  tempSubtext: {
    fontSize: 16,
    marginBottom: 10,
    color: "rgba(256,256,256,0.4)",
  },
  weatherUppercase: {
    color: "rgba(256,256,256,0.6)",
    fontSize: 18,
    alignSelf: "center",
    textTransform: "uppercase",
    fontWeight: "600",
    letterSpacing: 2,
  },
  otherData: {
    flex: 0.8,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    borderRadius: 30,
  },
  humidity: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    marginHorizontal: 5,
  },
  pressure: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    marginHorizontal: 5,
  },
  windSpeed: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    marginHorizontal: 5,
  },
  otherDataValueText: {
    fontSize: 14,
    color: "rgba(256,256,256,0.9)",
  },
  otherDataText: {
    fontSize: 14,
    color: "rgba(256,256,256,0.6)",
    marginTop: 10,
    textTransform: "capitalize",
  },
  unitText: {
    fontSize: 12,
    color: "rgba(256,256,256,0.6)",
  },
  dailyData: {
    flex: 1,
    alignSelf: "center",
    borderRadius: 30,
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
  dailyData: {
    flex: 1,
    width: "80%",
    alignSelf: "center",
    borderRadius: 30,
  },
});

export default HomeScreen;
