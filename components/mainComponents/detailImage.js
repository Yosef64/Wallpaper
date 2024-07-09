import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  Text,
} from "react-native";
import { useFonts } from "expo-font";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import uuid from "react-native-uuid";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { shareAsync } from "expo-sharing";
import { Button, Snackbar } from "@react-native-material/core";
import { TouchableOpacity } from "react-native";
import { loginAuth } from "../../firebaseconfig/login";
import * as Google from "expo-auth-session/providers/google";
import { Modal } from "react-native";
const CustomAlert = ({ isVisible, onClose, message }) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.alertContainer}>
        <Text style={styles.alertText}>{message}</Text>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default function DetailImage({ route, navigation }) {
  const { item } = route.params;
  const [isAlertVisible, setAlertVisible] = useState(false);

  const closeAlert = () => {
    setAlertVisible(false);
  };
  const [fontsLoaded] = useFonts({
    // "Montserrat-SemiBold":require("../../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf"),
    // "Montserrat-BoldItalic":require("../../assets/fonts/Montserrat/static/Montserrat-BoldItalic.ttf"),
    // "Montserrat-Bold":require("../../assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
    "YsabeauInfant-ExtraBold": require("../../assets/fonts/Ysabeau_Infant/static/YsabeauInfant-ExtraBold.ttf"),
    "YsabeauInfant-Bold": require("../../assets/fonts/Ysabeau_Infant/static/YsabeauInfant-Bold.ttf"),
    // "Poppins-Regular":require("../../assets/fonts/Poppins/Poppins-Regular.ttf"),
    // "Poppins-Bold":require("../../assets/fonts/Poppins/Poppins-Bold.ttf"),
  });
  const [downloading, setDownloading] = useState(false);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "800465345826-h4c0i8h0a2memukipk297oik9vd17i16.apps.googleusercontent.com.googleusercontent.com",
  });

  const fileName = `${uuid.v4()}.jpg`; // Ensure the file has a .jpg extension
  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;

     
    }
  }, [response]);
  async function handleImage(uri) {
    try {
      setDownloading(true);

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
      setDownloading(false);

      await shareAsync(result.uri);
    } catch (error) {
      // alert("the user didn't not give permissions");
      setDownloading(false);
      setAlertVisible(true);
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
        <Modal transparent={true} visible={isAlertVisible}>
          <View style={styles.alertContainer}>
            <Text style={styles.alertText}>Something went wrong</Text>
            <TouchableOpacity onPress={closeAlert} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={styles.left_arrow_container}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              
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
        {downloading && (
          <View style={styles.snackbar}>
            <View style={styles.snackbarChild}>
              <Text
                style={{
                  color: "white",
                  fontFamily: "YsabeauInfant-ExtraBold",
                }}
              >
                Downloading...
              </Text>
            </View>
          </View>
        )}
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
  snackbar: {
    position: "absolute",
    bottom: 20,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width - 10,
    height: 50,
    borderRadius: 10,
  },
  snackbarChild: {
    width: "50%",
    height: "100%",
    backgroundColor: "#121212",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  showAlertButton: {
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  alertContainer: {
    // flex:1,
    margin: "auto",
    padding: 20,
    backgroundColor: "#272042",
    borderRadius: 10,
    // color:"white",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
  },
  alertText: {
    fontSize: 18,
    marginBottom: 10,
    color:"white"
  },
  closeButton: {
    padding: 10,
    backgroundColor: "#FF0000",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
