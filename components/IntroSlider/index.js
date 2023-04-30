import { StatusBar } from "expo-status-bar";
import { Box, Button } from "native-base";
import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const IntroSlider = ({ slides, renderItem, onDone }) => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width } = Dimensions.get("window");
  const scrollViewRef = useRef();

  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const setSelectedPage = (pageNumber) => {
    const { currentPage } = sliderState;
    if (pageNumber !== currentPage) {
      const x = pageNumber * width;
      setSliderState({
        ...sliderState,
        currentPage: pageNumber,
      });
      scrollViewRef.current.scrollTo({ x, animated: true });
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          ref={scrollViewRef}
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            setSliderPage(event);
          }}
        >
          {slides.map((item) => (
            <View
              key={item.key}
              style={{
                flex: 1,
                width,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {renderItem(item)}
            </View>
          ))}
        </ScrollView>
        <View style={styles.paginationWrapper} onC>
          {slides.map(({ key }, index) => (
            <TouchableOpacity
              key={index}
              style={{}}
              onPress={() => {
                setSelectedPage(index);
              }}
            >
              <View
                style={[
                  styles.paginationDots,
                  { opacity: sliderState.currentPage === index ? 1 : 0.2 },
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>
        {sliderState.currentPage + 1 === slides?.length && (
          <Box
            bottom={130}
            lef={0}
            right={0}
            justifyContent="center"
            alignItems="center"
          >
            <Button width={120} onPress={onDone}>
              Listo
            </Button>
          </Box>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
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

export default IntroSlider;
