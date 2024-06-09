import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar, StyleSheet, View, Image, Text } from "react-native";
import { useFonts } from "expo-font";


export default function Appbar() {
    const [fontsLoaded] = useFonts({
        "NunitoSans_7pt-Bold": require("../../assets/fonts/NunitoSans_7pt-Bold.ttf"),
      });
      if(!fontsLoaded){
        return undefined;
      }
  

  return (
    <View style={styles.container}>
      <Ionicons name="menu" size={30} color="white" />
      <Text style={{fontSize:20, color:"white",fontFamily:"NunitoSans_7pt-Bold"}}>Home</Text>

      <Image
        source={require("../../assets/bell.png")}
        style={{ width: 25, height: 25, fontWeight: 700, tintColor:'white' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "rgb(10, 10, 34)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
