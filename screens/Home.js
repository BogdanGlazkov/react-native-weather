import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet, Image } from "react-native";
import { getWeatherApi } from "../redux/weather/weatherOperations";
import Loader from "../components/Loader";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.weather.currentWeather);

  const query = "Kyiv";

  useEffect(() => {
    // dispatch(getWeatherApi(query));
  }, []);

  if (data) {
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
          <Text style={styles.weatherState}>{description}</Text>
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
              {wind_speed} <Text style={styles.unitText}>km/h</Text>
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

        {/* Calendar */}
        <View style={styles.weatherState}>
          <Text style={styles.otherDataText}>Calendar</Text>
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
    backgroundColor: "#505050",
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
    marginVertical: 20,
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
    color: "rgba(256,256,256,0.4)",
  },
  weatherState: {
    marginTop: 10,
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
    color: "rgba(256,256,256,0.55)",
    marginTop: 10,
    textTransform: "capitalize",
  },
  unitText: {
    fontSize: 12,
    color: "rgba(256,256,256,0.55)",
  },
  dailyData: {
    flex: 1,
    alignSelf: "center",
    borderRadius: 30,
  },
});

export default HomeScreen;
