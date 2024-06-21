import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";
// import { BlurView } from "expo-blur";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function DetailImage({ route, navigation }) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ImageBackground source={{uri:item}} style={styles.backgroundImage}>
        <View style={styles.left_arrow_container}>
          <Image
            source={require("../../assets/left_arrow1.png")}
            style={styles.left_arrow}
          />
        </View>
        <View style={styles.bottom}>
          <View style={{...styles.left_arrow_container,marginLeft:0}}>
            <Image
              style={styles.left_arrow}
              source={require("../../assets/download.jpg")}
            />
          </View>
          <View style={styles.left_arrow_container}>
            <FontAwesome5 name="heart" size={35} color="black" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "space-between",
  },
  download_container: {
    backgroundColor: "white",
    width: 60,
    height: 60,
  },
  left_arrow_container: {
    backgroundColor: "white",
    width: 50,
    overflow: "hidden",
    height: 50,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  left_arrow: {
    width: 40,
    height: 40,
  },
  bottom: {
    marginBottom: 35,
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:50
  },
});
