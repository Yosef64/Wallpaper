import React ,{useEffect} from "react";
import {
  View,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import uuid from "react-native-uuid";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { shareAsync } from "expo-sharing";
import { Button, Snackbar } from "@react-native-material/core";
import { TouchableOpacity } from "react-native-gesture-handler";
import { loginAuth } from "../../firebaseconfig/login";
import * as Google from "expo-auth-session/providers/google";

export default function DetailImage({ route, navigation }) {
  const { item } = route.params;

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "800465345826-h4c0i8h0a2memukipk297oik9vd17i16.apps.googleusercontent.com.googleusercontent.com",
  });

  const fileName = `${uuid.v4()}.jpg`; // Ensure the file has a .jpg extension
  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      
      console.log(id_token);
    }
  }, [response]);
  async function handleImage(uri) {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access media library is required!");
        return;
      }
      const result = await FileSystem.downloadAsync(
        uri,
        FileSystem.documentDirectory + fileName
      );

      const asset = await MediaLibrary.createAssetAsync(result.uri);
      await MediaLibrary.createAlbumAsync("Pictures", asset, false);
      console.log("Image saved to gallery");

      await shareAsync(result.uri);
    } catch (error) {
      alert("the user didn't not give permissions");
    }
  }
  function handleLogin() {
    loginAuth();
  }
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ImageBackground
        source={{ uri: item.photo }}
        style={styles.backgroundImage}
      >
        <View style={styles.left_arrow_container}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require("../../assets/left_arrow1.png")}
              style={styles.left_arrow}
            />
          </Pressable>
        </View>
        <View style={styles.bottom}>
          <Pressable onPress={() => handleImage(item.photo)}>
            <View style={{ ...styles.left_arrow_container, marginLeft: 0 }}>
              <Image
                style={styles.left_arrow}
                source={require("../../assets/download.jpg")}
              />
            </View>
          </Pressable>
          <View style={styles.left_arrow_container}>
            <TouchableOpacity onPress={() => promptAsync()}>
              <FontAwesome5 name="heart" size={35} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        {/* <Snackbar
          message="Hello there how are you doing"
          action={
            <Button variant="text" title="Dismiss" color="#BB86FC" compact />
          }
        /> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "space-between",
  },
  left_arrow_container: {
    backgroundColor: "white",
    width: 50,
    overflow: "hidden",
    height: 50,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  left_arrow: {
    width: 40,
    height: 40,
  },
  bottom: {
    marginBottom: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
  },
});
