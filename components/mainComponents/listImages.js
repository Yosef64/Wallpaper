import { MasonryFlashList } from "@shopify/flash-list";
import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import ImageComponent from "./imageComp";

const data = [
  { id: 1, img: require("../../assets/img1.jpeg") },
  { id: 2, img: require("../../assets/img2.jpeg") },
  { id: 3, img: require("../../assets/img3.jpeg") },
  { id: 4, img: require("../../assets/img4.jpeg") },
  { id: 5, img: require("../../assets/img5.jpeg") },
  { id: 6, img: require("../../assets/img6.jpeg") },
  { id: 7, img: require("../../assets/img6.jpeg") },
  { id: 8, img: require("../../assets/img6.jpeg") },
];

export default function ListImages() {
  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={data}
        numColumns={2} // Set the number of columns
        renderItem={({ item, index }) => (
          <ImageComponent item={item} index={index} />
        )}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={200} // Estimate item size for better performance
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width - 5, // Use full screen width
    height: height, // Use full screen height
  },
  listContent: {
    paddingHorizontal: 20,
  },
  separator: {
    height: 10, // Space between items vertically
  },
});
