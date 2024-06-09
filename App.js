import React from "react";
import { Text, View,StyleSheet } from "react-native";
import { useFonts } from "expo-font";
// import AppLoading from 'expo-app-loading';
import Appbar from "./components/Appbar/Appbar";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Body from "./components/mainBody/Body";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <Appbar />
          <Body/>
        </View>
        <View>
          <Text>
            third pull request test
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(10, 10, 34)",
   
  },
}
)