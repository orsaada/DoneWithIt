import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

export function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.backgound}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/ituran.png")} />
        <Text>ITURAN APP</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgound: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#dc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 150,
    height: 80,
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
});
