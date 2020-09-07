import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.backgound}
    ></ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgound: {
    flex: 1,
  },
});
