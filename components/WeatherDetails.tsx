import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WeatherDetails = ({ data }) => {
  const { temp, tempMin, tempMax, main, humidity, wind, pressure }: any = data;
  return (
    <>
      {/*Temprature */}
      <View>
        <Text style={styles.temp}>
          {parseInt(temp)}
          <Text style={styles.tempSign}>°C</Text>
        </Text>
        <View style={styles.tempSub}>
          <Text style={styles.tempSubtext}>
            Min {parseInt(tempMin)} Max {parseInt(tempMax)}
          </Text>
        </View>
      </View>

      {/*Weather Condition */}
      <View>
        <Text style={styles.weatherUppercase}>{main}</Text>
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
            {parseInt(wind)} <Text style={styles.unitText}>km/h</Text>
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
    </>
  );
};

const styles = StyleSheet.create({
  temp: {
    color: "rgba(256,256,256,0.9)",
    fontSize: 60,
    alignSelf: "center",
  },
  tempSign: {
    color: "rgba(256,256,256,0.4)",
  },
  tempSub: {
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
});

export default WeatherDetails;
