import React from "react";
//
import { View, Text, Image, Button } from "react-native";
import { Stack, useNavigation, useRouter } from "expo-router";

const indexPage = () => {
  const navigation = useRouter();

  return (
    <View>
      <Stack
        initialRouteName="home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <Text>indexPage</Text>
      <Button
        onPress={() => {
          navigation.push("/intro");
        }}
        title="Ir al intro"
      ></Button>
      <Button
        onPress={() => {
          navigation.push("/auth/register");
        }}
        title="Ir al register"
      />
    </View>
  );
};

export default indexPage;
