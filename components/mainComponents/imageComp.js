import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Touchable, TouchableOpacity } from "react-native";

export default function ImageComponent({ item, index }) {
  const curRatio = index % 3;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push("ImageDetail", { item });
      }}
    >
      <Image
        source={require(item)}
        style={{
          height: curRatio == 1 ? 230 : curRatio == 2 ? 260 : 280,
          ...styles.image,
        }}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "97%",

    marginHorizontal: 5, // Space between items horizontally
    borderRadius: 10,
  },
});
