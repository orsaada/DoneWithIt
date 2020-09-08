import AsyncStorage from "@react-native-community/async-storage";
// import { StatusBar } from "expo-status-bar";
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
  Dimensions,
  StatusBar,
  Platform,
  Image,
  SafeAreaView,
  TouchableNativeFeedback,
  Button,
  ImageBackground,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

// ios - View -> UIView
// android - View -> android view
export default function App() {
  // console.log(Dimensions.get("screen"));
  YellowBox.ignoreWarnings([
    "Warning: Async Storage has been extracted from react-native core",
  ]);
  let x = 1;
  console.log("hi");
  console.log(useDeviceOrientation());
  console.log(useDimensions());

  const { landscape } = useDeviceOrientation();
  // const image = {} ;

  return (
    // can write directly here instead styles.container
    <SafeAreaView style={[styles.container, containerStyle]}>
      {
        // <View
        //   style={{
        //     backgroundColor: "#fff",
        //     // height: "30%",
        //     flex: 1,
        //     // width: "100%",
        //     // height: landscape ? "100%" : "30%",
        //     flexDirection: "row", // horizontal
        //     justifyContent: "space-around", // main
        //     alignItems: "center",
        //     alignContent: "center",
        //     //  flexWrap: "wrap",
        //   }}
        // >
        <ImageBackground
          source={require("./app/assets/background.jpg")}
          style={{
            flex: 1,
            resizeMode: "cover", // or 'stretch'
          }}
        >
          <Image source={require("./app/assets/ituran.png")} />
        </ImageBackground>
        /* <View
            style={{
              backgroundColor: "dodgerblue",
              // width: 100,
              height: 100,
              flexBasis: 100,
              flexGrow: 1,
              // alignSelf: "flex-start",
            }}
          /> */
        // </View>
      }

      {/* <Text numberOfLines={1} onPress={() => console.log("Text clicked")}>
        Hello World
      </Text> */}

      <Button
        title="REGISTER"
        color="#fc5c65"
        onPress={() =>
          Alert.prompt("mysss title", "sssy message", (text) =>
            console.log(text)
          )
        }
      />
      <Button
        title="LOG IN"
        color="#4ECDC4"
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

      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

// parameter an object which has property container, contains all the style in the container like css, a plain js property
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});