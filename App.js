import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Animated, { withTiming } from "react-native-reanimated";

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

const App = () => {
  return (
    <Animated.View
      style={styles.container}
      entering={customBounceIn}
      exiting={customBounceOut}
    >
      <ImageBackground
        source={{ uri: "https://example.com/your-background-image.jpg" }}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>Hello, World!</Text>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default App;
