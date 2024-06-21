import { MasonryFlashList } from "@shopify/flash-list";
import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import ImageComponent from "./imageComp";
import { ref, listAll, getDownloadURL } from "firebase/storage";


export default function ListImages({ listImage }) {
 
 
  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={listImage}
        numColumns={2} // Set the number of columns
        renderItem={({ item, index }) => (
          <ImageComponent item={item} index={index} />
        )}
        keyExtractor={(item) => item}
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
