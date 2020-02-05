import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Please use this variable as the list of dates + availability
const DATES = [
  {
    date: new Date("2020-02-4"),
    isAvailable: false,
  },
  {
    date: new Date("2020-02-18"),
    isAvailable: false,
  },
  {
    date: new Date("2020-03-03"),
    isAvailable: true,
  },
  {
    date: new Date("2020-03-17"),
    isAvailable: true,
  },
  {
    date: new Date("2020-03-31"),
    isAvailable: true,
  },
];

export default function Schedule() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Please build this screen according to the project spec 🙂</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    width: "70%",
  },
  text: {
    fontSize: 16,
    color: "#75787b", // Zippity gray
    textAlign: "center",
  },
});
