import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";
import ImageComponent from "./imageComp";

export default function ListImages({ navigation, listImage }) {
  const handlePress = (item) => {
    navigation.push("DetailImage", { item });
  };

  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={listImage}
        numColumns={2} 
        renderItem={({ item, index }) => {
          const curRatio = index % 3;
          return (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <Image
                source={{ uri: item.photo }}
                style={{
                  height: curRatio == 1 ? 230 : curRatio == 2 ? 260 : 280,
                  ...styles.image,
                }}
              />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.photo}
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
  image: {
    width: "97%",

    marginHorizontal: 5, // Space between items horizontally
    borderRadius: 10,
  },
});
