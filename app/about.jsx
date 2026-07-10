import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page Title</Text>
      <Text style={{ marginTop: 15 }}>Content of the page</Text>
      <Link href="/" style={styles.link}>
        Back to home
      </Link>
    </View>
  );
};
export default About;



// Styles

const styles = StyleSheet.create({
  container: {
   
    
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "red",
  },
  link: {
    textDecorationLine: "underline",
    color: "blue",
  },
});
