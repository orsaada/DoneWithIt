import AsyncStorage from "@react-native-community/async-storage";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, YellowBox } from "react-native";

// ios - View -> UIView
// android - View -> android view
export default function App() {
  YellowBox.ignoreWarnings([
    "Warning: Async Storage has been extracted from react-native core",
  ]);
  let x = 1;
  console.log("hi");
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// parameter an object which has property container, contains all the style in the container like css, a plain js property
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
