import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Loader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
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
  text: {
    fontSize: 18,
    color: "rgba(256,256,256,0.9)",
  },
});

export default Loader;
