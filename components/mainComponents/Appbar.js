import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
// import { doc, getDoc } from "firebase/firestore";
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
// import { db } from "../../firebaseconfig/firebase";
export default function Appbar() {
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const docRef = doc(db, "images", "all");
  //       const docSnap = await getDoc(docRef);
  //       if (docSnap.exists()) {
  //         console.log("Document data:", docSnap.data());
  //       } else {
  //         console.log("No such document!");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching document: ", error);
  //     }
  //   }

  //   fetchData();
  // }, []);
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "NunitoSans_7pt-Bold": require("../../assets/fonts/NunitoSans_7pt-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  }
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer}>
        <Ionicons name="menu" size={30} color="white" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 25,
          color: "white",
          fontFamily: "NunitoSans_7pt-Bold",
        }}
      >
        H.Wallpaper
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "#121212",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
