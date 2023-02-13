import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import WeatherDetails from "../components/WeatherDetails";

const ForecastScreen = ({ navigation, route }) => {
  const data = route.params;
  const { city, day } = data;
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

        {/* WeatherDetails */}
        <WeatherDetails data={data} />
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
  exit: {
    width: 24,
    height: 24,
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
});

export default ForecastScreen;
