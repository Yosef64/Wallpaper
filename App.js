import React from "react";
import { Text, View,StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Appbar from "./components/Appbar/Appbar";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";
import Main from "./components/MainScreen/Main";

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    
  <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerShown:false
    }}
    >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  </NavigationContainer>
   
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1
  },
}
)