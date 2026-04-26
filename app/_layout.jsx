import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack  screenOptions={{headerStyle :{backgroundColor: "#ddd"}}}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About Us" }} />
      <Stack.Screen name="contact" options={{ title: "Contact Us" }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
