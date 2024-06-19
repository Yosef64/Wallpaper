import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Appbar from "../mainComponents/Appbar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Categories from "../mainComponents/categories";
import ListImages from "../mainComponents/listImages";
// import ListImages from "../mainComponents/listImages";
function merginList(lists) {
  const result = [];
  let maxLength = 0;

  // Calculate the maximum length of all lists
  lists.forEach((list) => {
    if (list.length > maxLength) {
      maxLength = list.length;
    }
  });

  // Interleave elements from each list
  for (let i = 0; i < maxLength; i++) {
    lists.forEach((list) => {
      if (i < list.length) {
        result.push(list[i]);
      }
    });
  }

  return result;
}

export default function Main({ route, navigation }) {
  let { data } = route.params;
  data = {
    ...data,
    all: merginList([
      data["place"],
      data["people"],
      data["orthodox"],
      data["muslim"],
      data["illustrator"],
    ]),
  };
  const [cur, setCur] = useState("all");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#121212" />
      <View style={{ flex: 1 }}>
        <Appbar />
        {/* <View style={{width:400,height:60,justifyContent:"center",alignItems:"center",paddingTop:60,paddingRight:20}}>
          <Image source={require("../../assets/banner2.png")} style={{width:350,height:200}} />
        </View> */}

        <Categories cur={cur} setCur={setCur} />
        <ListImages listImage={data[cur]} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  text: {
    color: "white",
    fontSize: 29,
  },
});
