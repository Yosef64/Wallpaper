import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Appbar from "../mainComponents/Appbar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Categories from "../mainComponents/categories";
import ListImages from "../mainComponents/listImages";
import LottieView from "lottie-react-native";
import * as Network from "expo-network";
import { getFire } from "./fetching";

function merginList(lists) {
  const result = [];
  let maxLength = 0;
  lists.forEach((list) => {
    if (list.length > maxLength) {
      maxLength = list.length;
    }
  });

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
  const [data, setData] = useState({});
  const [connection, setConnection] = useState(null);
  const animation = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const list = await getFire();

      setData({
        ...list,
        all: merginList(
          [list["people"], list["illustrator"], list["muslim"]],
          list["orthodox"],
          list["place"]
        ),
      });
    }
    fetchData();
    async function isThereConnection() {
      const con = await Network.getNetworkStateAsync();
      setConnection(con.isConnected);
    }
    isThereConnection();
  }, []);

  const [cur, setCur] = useState("all");
  // console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#121212" />
      <View style={{ flex: 1 }}>
        <Appbar />
        {/* <View style={{width:400,height:60,justifyContent:"center",alignItems:"center",paddingTop:60,paddingRight:20}}>
          <Image source={require("../../assets/banner2.png")} style={{width:350,height:200}} />
        </View> */}

        <Categories cur={cur} setCur={setCur} />
        {connection && data ? (
          <ListImages listImage={data[cur]} navigation={navigation} />
        ) : (
          <View
            style={{
              width: Dimensions.get("window").width,
              alignItems: "center",
              marginTop: 100,
              flex: 1,
            }}
          >
            <LottieView
              autoPlay
              ref={animation}
              source={require("../../assets/internet.json")}
              style={{
                width: 200,
                height: 200,
                backgroundColor: "#121212",
              }}
            />
            <Text style={{ color: "white", fontSize: 17 }}>
              Check your internet connection
            </Text>
            <TouchableOpacity>
              <View
                style={{
                  width: 100,
                  height: 45,
                  backgroundColor: "#ffc300",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  marginTop: 40,
                }}
              >
                <Text style={{ color: "black" }}>Refresh</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
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
