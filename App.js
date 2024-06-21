import React, { useEffect, useState, useCallback } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image, SafeAreaView, View, Text } from "react-native";
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
  const [data, setData] = useState(null);

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
            headerShown: false,
            headerTintColor: "white",
            drawerActiveTintColor: "blue",
            drawerLabelStyle: {
              color: "white",
            },
            drawerIconStyle: {
              margin: 0,
            },
          }}
        >
          <Drawer.Screen
            name="Home"
            component={MainStackNavigator}
            options={{
              drawerLabel: "Home",
              title: "Home",
              drawerIcon: () => (
                <MaterialIcons name="home" color="white" size={30} />
              ),
            }}
          />
          <Drawer.Screen
            name="About"
            component={About}
            options={{
              drawerLabel: "Login",
              title: "Login",
              drawerIcon: () => (
                <MaterialIcons name="login" color="white" size={30} />
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
                <MaterialIcons name="inbox" color="white" size={30} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}
