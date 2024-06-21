import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
// import { doc, getDoc } from "firebase/firestore";
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
// import { db } from "../../firebaseconfig/firebase";
export default function Appbar() {
  
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "PoetsenOne-Regular": require("../../assets/fonts/PoetsenOne-Regular.ttf"),
    "Poppins-Regular":require("../../assets/fonts/Poppins/Poppins-Regular.ttf")
  });
  if (!fontsLoaded) {
    return undefined;
  }
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer}>
        <Ionicons name="menu" size={30} color="white" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 25,
          color: "white",
          fontFamily: "PoetsenOne-Regular",
        }}
      >
        H.Wallpaper
      </Text>
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
