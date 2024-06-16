import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar, StyleSheet, View, Image, Text } from "react-native";
import { useFonts } from "expo-font";

export default function Appbar() {
  const [fontsLoaded] = useFonts({
    "NunitoSans_7pt-Bold": require("../../assets/fonts/NunitoSans_7pt-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          color: "white",
          fontFamily: "NunitoSans_7pt-Bold",
        }}
      >
        H.Wallpaper
      </Text>
      <Ionicons name="menu" size={30} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "#121212",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
