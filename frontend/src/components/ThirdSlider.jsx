import React from "react";
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

const data = [
  {
    id: "1",
    title: "Slide 1",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: "2",
    title: "Slide 2",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: "3",
    title: "Slide 3",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: "4",
    title: "Slide 4",
    image: "https://via.placeholder.com/300x200",
  },
];

const ThirdAppCarousel = () => {
  const screenWidth = Dimensions.get("window").width;

  const renderItem = ({ item }) => (
    <View style={[styles.card, { height: screenWidth / 2 }]}>
      <Image source={require("../assets/Emotions.png")} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={[styles.flatListContainer, { height: screenWidth / 2 }]}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    position: "relative", // Ensure FlatList stays within its parent
    overflow: "hidden", // Prevent items from exceeding container
  },
  container: {
    paddingHorizontal: 10, // Add padding on both sides
  },
  card: {
    width: Dimensions.get("window").width * 0.4, // 80% of screen width
    marginRight: 10, // Space between cards
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // For Android shadow
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 1, // Aspect ratio is 1:1
    borderColor: "#f0f0f0",
    borderWidth: 1,
    margin: 10,
  },
  image: {
    width: "70%",
    height: "70%", // 70% of the card's height
    objectFit: "contain",
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ThirdAppCarousel;
