import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

export default function About() {
  return (
    <ImageBackground
      source={require("../assets/black_gold.jpeg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.text}>
              We developed this app with a deep appreciation for the rich and
              diverse culture and traditions of Ethiopia. Our goal is to bring a
              piece of Ethiopia's beauty to your everyday life through stunning
              wallpapers that capture the essence of this vibrant nation. From
              the breathtaking landscapes of the Simien Mountains to the
              intricate patterns of traditional Ethiopian art, each wallpaper is
              meticulously chosen to reflect the unique and fascinating aspects
              of Ethiopian heritage.
            </Text>
            <Text style={styles.text}>
              Our collection includes images that celebrate the diverse
              landscapes, from lush highlands and arid deserts to the bustling
              streets of Addis Ababa. Each wallpaper is a testament to
              Ethiopia's natural beauty and cultural richness. Additionally, we
              feature traditional Ethiopian motifs and designs, bringing the
              elegance and history of Ethiopian art directly to your device.
              These wallpapers are not just images; they are a window into the
              soul of Ethiopia, a country with a storied past and a bright
              future.
            </Text>
            <Text style={styles.text}>
              By using these wallpapers, you can transform your phone into a
              canvas that displays the splendor of Ethiopian culture. The vivid
              colors and intricate details of our wallpapers will enhance your
              phone's appearance, making it not just a functional device but a
              source of inspiration and pride. Whether you are of Ethiopian
              descent, have visited the country, or simply appreciate its
              culture, these wallpapers will serve as a beautiful reminder of
              Ethiopia's enduring legacy.
            </Text>
            <Text style={styles.text}>
              We have put a lot of effort into curating and designing this
              collection, ensuring that each wallpaper is of the highest
              quality. We believe that these images will not only beautify your
              phone but also spark curiosity and appreciation for Ethiopian
              culture among users worldwide. We are confident that you will find
              joy and satisfaction in exploring our collection and making these
              wallpapers a part of your daily life.
            </Text>
            <Text style={styles.text}>
              We hope you enjoy this app as much as we enjoyed creating it. It
              is our sincere desire that through this app, you feel a closer
              connection to Ethiopia and its wonderful traditions. Thank you for
              choosing our app, and we look forward to bringing you even more
              stunning wallpapers in the future.
            </Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
const styles = {
  container: {
    flex: 1,
    paddingTop: 10,

    paddingHorizontal: 20,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
};
