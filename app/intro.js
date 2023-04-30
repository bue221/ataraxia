import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, PixelRatio, Image } from "react-native";
import IntroSlider from "../components/IntroSlider";
import { useRouter } from "expo-router";

const slides = [
  {
    key: 1,
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: "https://reactnative.dev/img/tiny_logo.png",
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Title 2",
    text: "Other cool stuff",
    image: "https://reactnative.dev/img/tiny_logo.png",
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: "https://reactnative.dev/img/tiny_logo.png",
    backgroundColor: "#22bcb5",
  },
];

const IntroPage = () => {
  const renderItem = (item) => {
    return (
      <View
        style={{
          margin: 50,
          width: "70%",
          //   backgroundColor: item.backgroundColor,
          //   flex: 1,
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 18,
          },
          shadowOpacity: 0.25,
          shadowRadius: 20.0,
          elevation: 24,
          borderRadius: 50,
        }}
      >
        <Image source={{ uri: item.image }} style={styles.imageStyle} />
        <View style={styles.wrapper}>
          <Text style={styles.header}>{item.title}</Text>
          <Text style={styles.paragraph}>{item.text}</Text>
        </View>
      </View>
    );
  };
  const navigation = useRouter();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <IntroSlider
        slides={slides}
        renderItem={renderItem}
        onDone={() => navigation.push("/auth/login")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: PixelRatio.getPixelSizeForLayoutSize(135),
    width: "100%",
    borderRadius: 50,
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 17,
  },
  paginationWrapper: {
    position: "absolute",
    bottom: 200,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#0898A0",
    marginLeft: 10,
  },
});

export default IntroPage;
