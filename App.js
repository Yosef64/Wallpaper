import React, { useEffect, useState, useCallback } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  Image,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Modal,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import Contactus from "./screens/Contactus";
import About from "./screens/about";
import Home from "./screens/Home";
import Main from "./components/Screens/Main";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseconfig/firebase";
import DetailImage from "./components/mainComponents/detailImage";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";
import ListImages from "./components/mainComponents/listImages";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MainStackNavigator({ route }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="DetailImage" component={DetailImage} />
      <Stack.Screen name="ListImage" component={ListImages} />
    </Stack.Navigator>
  );

}


// SplashScreen.preventAutoHideAsync();

export default function App() {
  // const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "YsabeauInfant-ExtraBold": require("./assets/fonts/Ysabeau_Infant/static/YsabeauInfant-ExtraBold.ttf"),
    "YsabeauInfant-Bold": require("./assets/fonts/Ysabeau_Infant/static/YsabeauInfant-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => (
            <SafeAreaView>
              <View
                style={{
                  height: 200,
                  width: "100%",
                  marginBottom: 50,
                  backgroundColor: "white",
                }}
              >
                <Image
                  source={require("./assets/pixelmono.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          )}
          screenOptions={{
            drawerStyle: {
              backgroundColor: "black",
              width: 230,
            },
            // headerShown: false,
            headerTintColor: "black",
            drawerActiveTintColor: "white",

            drawerLabelStyle: {
              color: "white",
              fontFamily: "YsabeauInfant-Bold",
            },
          }}
        >
          <Drawer.Screen
            name="Home"
            component={MainStackNavigator}
            options={{
              drawerLabel: "Home",
              headerShown: false,
              title: "Home",
              drawerIcon: () => (
                <Image
                  source={require("./assets/home.png")}
                  style={styles.homeIcon}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="About"
            component={About}
            options={{
              drawerLabel: "About Us",
              title: "Login",
              drawerIcon: () => (
                <Image
                  source={require("./assets/info.png")}
                  style={styles.homeIcon}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Favourite"
            component={About}
            options={{
              drawerLabel: "Favourite",
              title: "Login",
              drawerIcon: () => (
                <Image
                  source={require("./assets/bookmark.png")}
                  style={styles.homeIcon}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Contact"
            component={Contactus}
            options={{
              drawerLabel: "Contact Us",
              title: "Contact Us",
              drawerIcon: () => (
                <Image
                  source={require("./assets/email.png")}
                  style={styles.email}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Rate Us"
            component={About}
            options={{
              drawerLabel: "Rate Us",
              title: "Login",
              drawerIcon: () => (
                <Image
                  source={require("./assets/star.png")}
                  style={styles.star}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Login"
            component={About}
            options={{
              drawerLabel: "Login",
              title: "Login",
              drawerIcon: () => (
                <Image
                  source={require("./assets/login.png")}
                  style={styles.email}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  homeIcon: {
    width: 27,
    height: 27,
    tintColor: "white",
  },
  star: {
    width: 30,
    height: 30,
  },
  email: {
    width: 30,
    height: 30,
    tintColor: "white",
  },
});
