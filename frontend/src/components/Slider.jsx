import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

const data = [
  {
    title: "Slide 1",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Slide 2",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Slide 3",
    image: "https://via.placeholder.com/300x200",
  },
  // Add more slides as needed
];

export default function AppCarousel() {
  const width = Dimensions.get("window").width;
  return (
    <View
      style={{
        height: width / 2,
      }}
    >
      <Carousel
        // loop
        width={width}
        height={width / 2}
        // autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: "#fff",
              justifyContent: "center",
              width: width - 60,
              borderRadius: 25,
              overflow: "hidden",
              height: width / 2,
            }}
          >
            <ImageBackground
              source={require("../assets/CardBg.png")}
              resizeMode="cover"
              style={{
                flex: 1,
                justifyContent: "center",
                // alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 24,
                  paddingLeft: 20,
                  // textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Most Affirmed
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 24,
                  paddingLeft: 20,
                  // textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Today
              </Text>

              <Text
                style={{
                  color: "#fff",
                  fontSize: 13,
                  padding: 20,
                  // textAlign: "center",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                "I am in control of my emotions."
              </Text>
              <Text
                style={{
                  color: "#000",
                  fontSize: 9,
                  paddingLeft: 20,
                  // textAlign: "center",
                  fontWeight: "bold",
                  //   fontStyle: "italic",
                }}
              >
                Over 3,500 users have affirmed this today.
              </Text>
              <Text
                style={{
                  color: "#4262FF",
                  fontSize: 14,
                  paddingLeft: 20,
                  paddingTop: 5,
                  // textAlign: "center",
                  fontWeight: "bold",
                  //   fontStyle: "italic",
                }}
              >
                Learn More
              </Text>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  );
}
