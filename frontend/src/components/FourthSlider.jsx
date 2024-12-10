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

export default function FourthSlider() {
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
              source={require("../assets/SecondCardBg.png")}
              resizeMode="cover"
              style={{
                flex: 1,
                justifyContent: "center",
                // alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <View
                style={{
                  padding: 20,
                  display: "flex",
                  flexDirection: "row",
                  height: "100%",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* view of 30% height  float to bottom  */}
                <ImageBackground
                  source={require("../assets/blurr.png")}
                  resizeMode="cover"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "120%",
                    height: "40%",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className=""
                >
                  <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    width: "100%",
                    justifyContent: "space-between",
                  }}>
                        <View>
                            <Text style={{
                                color: "#fff",
                                fontSize: 16,
                                paddingLeft: 20,
                                fontWeight: "bold",
                                }}>
                                Today’s Affirmation
                            </Text>
                            <Text style={{
                                color: "#FFBE16",
                                fontSize: 12,
                                paddingLeft: 20,
                                fontWeight: "bold",
                                fontStyle: "italic",
                                }}>
                                I am capable of overcoming any challenge.
                            </Text>


                        </View>
                        <Image source={require("../assets/Favorite_fill.png")} style={{ width: 20, height: 20 }} />
                  </View>
                </ImageBackground>
              </View>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  );
}
