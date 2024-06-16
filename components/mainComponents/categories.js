import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function Categories() {
  const [active, setActive] = useState(1);
  const listOfCategories = [
    { id: 1, title: "All" },
    { id: 2, title: "Most Liked" },
    { id: 3, title: "Place" },
    { id: 4, title: "People" },
    { id: 5, title: "Illustrator" },
    { id: 6, title: "Orthodox" },
    { id: 7, title: "Muslim" },
  ];

  function hanldePress(id) {
    setActive(id);
  }
  return (
    <View style={{ paddingHorizontal: 19 }}>
      <View>
        <Text style={{ color: "white" }}>Categories</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {listOfCategories.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => hanldePress(item.id)}>
            <View
              style={
                active == item.id
                  ? { ...styles.category, ...styles.activeCategory }
                  : styles.category
              }
            >
              <Text style={{ color: active == item.id ? "black" : "white" }}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    backgroundColor: "#2a333a",
    width: 100,
    height: 50,

    borderRadius: 10,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  activeCategory: {
    backgroundColor: "#add9e6",
  },
});
