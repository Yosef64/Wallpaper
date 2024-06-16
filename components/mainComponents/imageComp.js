import React from "react";
import { Image, StyleSheet } from "react-native";
export default function ImageComponent({ item, index }) {
    
    const curRatio = index%3;
  return <Image source={item.img} style={{height:curRatio == 1? 230:curRatio==2 ? 260:280,...styles.image}} />;
}
const styles = StyleSheet.create({
  image: {
    width: "97%",
    

    marginHorizontal: 5, // Space between items horizontally
    borderRadius: 10,
  },
});
