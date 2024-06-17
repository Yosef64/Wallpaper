import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";
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
        <View style={{width:400,height:60,justifyContent:"center",alignItems:"center",paddingTop:60,paddingRight:20}}>
          <Image source={require("../../assets/banner2.png")} style={{width:350,height:200}} />
        </View>
        
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
