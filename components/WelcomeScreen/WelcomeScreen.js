import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import Animated, {
  BounceInUp,
  BounceOut,
  withTiming,
} from "react-native-reanimated";
import { db } from "../../firebaseconfig/firebase";
import { getDoc, collection,doc } from "firebase/firestore";
export default function WelcomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        
        const docRef = doc(db, "images","all");
        const docSnap = await getDoc(docRef);
        const data = docSnap.data()

        navigation.replace("Main", { data });
      } catch (error) {
        console.error(
          "Error fetching image URLs from Firebase Storage: ",
          error
        );
      }
    }
    getData();
  }, [navigation]);

  const customBounceIn = () => {
    "worklet";
    return {
      animations: {
        opacity: withTiming(1, { duration: 500 }), // Set custom duration here
        transform: [
          {
            scale: withTiming(1, { duration: 500 }), // Set custom duration here
          },
        ],
      },
      initialValues: {
        opacity: 0,
        transform: [
          {
            scale: 0.5,
          },
        ],
      },
    };
  };

  const customBounceOut = () => {
    "worklet";
    return {
      animations: {
        opacity: withTiming(0, { duration: 500 }), // Set custom duration here
        transform: [
          {
            scale: withTiming(0.5, { duration: 500 }), // Set custom duration here
          },
        ],
      },
      initialValues: {
        opacity: 1,
        transform: [
          {
            scale: 1,
          },
        ],
      },
    };
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/back_splash.jpg")}
    >
      <View style={styles.container}>
        <Animated.View
          entering={BounceInUp}
          exiting={BounceOut}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("../../assets/splash_logo.png")}
            style={styles.image1}
          />
        </Animated.View>

        <Animated.View
          entering={customBounceIn}
          exiting={customBounceOut}
          style={{ flex: 1, justifyContent: "flex-end" }}
        >
          <Image
            source={require("../../assets/pixelmono.png")}
            style={styles.image2}
          />
        </Animated.View>
      </View>

      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image2: {
    width: 400,
    height: 500,
  },

  image1: {
    width: 300,
    height: 240,
  },
});
