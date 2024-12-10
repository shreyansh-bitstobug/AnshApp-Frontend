import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AppCarousel from "../components/Slider";
import SecondAppCarousel from "../components/SecondSlider";
import ThirdAppCarousel from "../components/ThirdSlider";
import FourthSlider from "../components/FourthSlider";

export default function Page() {
  return (
    <View className="flex flex-1">
      <Header />
      <Content />
      {/* <Footer /> */}
    </View>
  );
}

function Content() {
  return (
    <ScrollView  className="flex-1 px-4">
      <View className="py-4 md:py-12 lg:py-16 xl:py-48">
        <View className="px-4 md:px-6">
          <View className="flex flex-col items-start gap-4 ">
            {/* first container  */}
            <Text
              style={{
                color: "#4F3422",
                fontSize: 20,
                fontWeight: "600",
              }}
              role="heading"
              className=" text-center tracking-tighter "
            >
              Trending Affirmations
            </Text>

            <View className="gap-4">
              <AppCarousel />
            </View>

            {/* second container  */}

            <Text
              style={{
                color: "#4F3422",
                fontSize: 20,
                fontWeight: "600",
              }}
              role="heading"
              className=" text-center tracking-tighter "
            >
              Mood Selection
            </Text>

            <View className="gap-4">
              <SecondAppCarousel />
            </View>

              {/* third container  */}

            <Text
              style={{
                color: "#4F3422",
                fontSize: 20,
                fontWeight: "600",
              }}
              role="heading"
              className=" text-center tracking-tighter "
            >
              Categories Selection
            </Text>

            <View className="gap-4">
              <ThirdAppCarousel />
            </View>

            <View className="gap-4">
              <FourthSlider />
            </View>
          </View>
        </View>
      </View>
    </ScrollView >
  );
}

function Header() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
          height: "auto",
        }}
      >
        <View
          style={{
            // display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
          className=""
          href="/"
        >
          {/* back button image  */}
          <Image
            style={{ paddingTop: 10 }}
            // className="h-4"
            source={require("../assets/BackButton.png")}
            alt="logo"
            width={20}
            height={20}
          />
          <Text
            style={{
              color: "#4F3422",
              fontSize: 20,
            }}
            className="text-2xl font-bold"
          >
            Affrimations
          </Text>
        </View>
        <View className="flex flex-row gap-4 sm:gap-6">
          <Image
            style={{ paddingTop: 10 }}
            // className="h-4"
            source={require("../assets/sound_mute.png")}
            alt="logo"
            width={20}
            height={20}
          />
        </View>
      </View>
    </View>
  );
}

function Footer() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      className="flex shrink-0 bg-gray-100"
      style={{ paddingBottom: bottom }}
    ></View>
  );
}
