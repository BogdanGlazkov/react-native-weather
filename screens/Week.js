import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WeekScreen = () => {
  return (
    <View style={styles.container}>
      <Text>WeekScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
});

export default WeekScreen;
