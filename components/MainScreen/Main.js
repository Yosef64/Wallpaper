import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Appbar from "../mainComponents/Appbar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Categories from "../mainComponents/categories";
import ListImages from "../mainComponents/listImages";
import MyList from "../mainComponents/listImages";

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#121212" />
      <View style={{flex:1}}>
        <Appbar />
        <Categories />
        <MyList />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  text:{
    color:"white",
    fontSize:29
  }
});
