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

const data = [
  {
    id: 1,
    image:
      "https://firebasestorage.googleapis.com/v0/b/habeshanwall-4dceb.appspot.com/o/illustrator%2Fpixelcut-export%20(10).jpeg?alt=media&token=e5c90704-e81f-4b95-b90b-ca1cb6955830",
  },
  {
    id: 2,
    image:
      "https://firebasestorage.googleapis.com/v0/b/habeshanwall-4dceb.appspot.com/o/illustrator%2Fpixelcut-export%20(1).jpeg?alt=media&token=9fa11931-a4fb-4df6-94b1-1e5a8e4868f7",
  },
  {
    id: 3,
    image:
      "https://firebasestorage.googleapis.com/v0/b/habeshanwall-4dceb.appspot.com/o/illustrator%2Fpixelcut-export%20(11).jpeg?alt=media&token=f3ac4514-3f44-4742-9944-71b804f2353a",
  },
  {
    id: 4,
    image:"https://firebasestorage.googleapis.com/v0/b/habeshanwall-4dceb.appspot.com/o/illustrator%2Fpixelcut-export%20(12).jpeg?alt=media&token=3329fb46-2d7b-4a2c-be40-081dc100cef7",
  },
];

export default function ListImages({ navigation, listImage }) {
  const handlePress = (item) => {
    navigation.push("DetailImage", { item });
  };

  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={data}
        numColumns={2}
        renderItem={({ item, index }) => {
          const curRatio = index % 3;
          return (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <Image
                source={{uri:item.image}}
                style={{
                  height: curRatio == 1 ? 230 : curRatio == 2 ? 260 : 280,
                  ...styles.image,
                }}
              />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
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
