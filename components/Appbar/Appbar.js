import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar, StyleSheet, View, Image, Text } from "react-native";
// import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';


export default function App() {
//   let [fontsLoaded] = useFonts({
//     Nunito_400Regular,
//     Nunito_700Bold,
//   });

  

  return (
    <View style={styles.container}>
      <Ionicons name="menu" size={30} color="white" />
      <Text style={{fontSize:20, color:"white"}}>Home</Text>

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
