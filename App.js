import AsyncStorage from "@react-native-community/async-storage";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  YellowBox,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  Platform,
  Image,
  SafeAreaView,
  TouchableNativeFeedback,
  Button,
} from "react-native";

// ios - View -> UIView
// android - View -> android view
export default function App() {
  YellowBox.ignoreWarnings([
    "Warning: Async Storage has been extracted from react-native core",
  ]);
  let x = 1;
  console.log("hi");
  return (
    // can write directly here instead styles.container
    <SafeAreaView style={[styles.container, containerStyle]}>
      {/* <Text numberOfLines={1} onPress={() => console.log("Text clicked")}>
        Hello World
      </Text> */}

      <Button
        title="Click me"
        onPress={() =>
          Alert.prompt("mysss title", "sssy message", (text) =>
            console.log(text)
          )
        }
      />

      {/* <Image source={require("./assets/icon.png")} />
      <TouchableNativeFeedback>
        <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}>
          <Button
            color="orange"
            title="Click me"
            onPress={() =>
              Alert.alert("my title", "message", [
                { text: "yes", onPress: () => console.log("yes") },
                { text: "no", onPress: () => console.log("no") },
              ])
            } //gets 3th parameter array of buttons
          />
        </View>
      </TouchableNativeFeedback> */}
      {/* <Image
          // blurRadius={10}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        /> */}

      {/* <TouchableHighlight onPress={() => console.log("image tapped")}>
        <Image
          // blurRadius={10}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight> */}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

// parameter an object which has property container, contains all the style in the container like css, a plain js property
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
