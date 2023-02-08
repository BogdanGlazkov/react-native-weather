import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const WeekScreen = ({ navigation, route }) => {
  const {
    city,
    day,
    dayOfTheWeek,
    temp,
    tempMax,
    tempMin,
    main,
    wind,
    humidity,
    pressure,
  } = route.params;
  const date = new Date(day).toDateString();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerFlex}>
          <TouchableOpacity
            style={styles.exit}
            onPress={() => navigation.navigate("Home")}
          >
            <Feather
              name="arrow-left"
              size={24}
              color="rgba(256,256,256,0.9)"
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>Forecast</Text>
          </View>
          <View></View>
        </View>
      </View>
      <View style={styles.mainContainer}>
        {/* Present Date */}
        <View style={styles.date}>
          <Text style={styles.dateText}>{date}</Text>
        </View>

        {/* Current Location */}
        <View style={styles.location}>
          <Text style={styles.locationText}>{city}</Text>
        </View>

        {/*Temprature */}
        <View>
          <Text style={styles.temp}>
            {temp}
            <Text style={styles.tempSign}>°C</Text>
          </Text>
          <View style={styles.tempSub}>
            <Text style={styles.tempSubtext}>
              Min {tempMin} Max {tempMax}
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
              {wind} <Text style={styles.unitText}>km/h</Text>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#006B76",
  },
  header: {
    height: 88,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(256,256,256,0.6)",
  },
  headerFlex: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "500",
    color: "rgba(256,256,256,0.9)",
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 16,
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
});

export default WeekScreen;
