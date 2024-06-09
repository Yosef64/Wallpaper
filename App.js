import React from "react";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
// import AppLoading from 'expo-app-loading';
import Appbar from "./components/Appbar/Appbar";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={{ flex: 1 }}>
          <Appbar />
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
