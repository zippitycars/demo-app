import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Welcome(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Zippity!</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={() => props.navigation.push("Schedule")}
      >
        <Text style={styles.buttonText}>Schedule an Appointment</Text>
      </TouchableOpacity>
      <View style={styles.viewBottom}>
        <Text style={styles.text}>Zippity Gray</Text>
        <Text style={[styles.text, styles.blue]}>Zippity Blue</Text>
        <Text style={[styles.text, styles.red]}>Zippity Red</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
  },
  header: {
    fontSize: 32,
    color: "#75787b", // Zippity gray
  },
  buttonText: {
    fontSize: 24,
    color: "white",
  },
  button: {
    backgroundColor: "#48999e", // Zippity blue
    padding: 15,
    borderRadius: 15,
  },
  viewBottom: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-around",
  },
  text: {
    fontSize: 16,
    color: "#75787b", // Zippity gray
  },
  blue: {
    color: "#48999e", // Zippity blue
  },
  red: {
    color: "#d53f4e", // Zippity red
  },
});
