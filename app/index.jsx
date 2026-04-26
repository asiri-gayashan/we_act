import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Logo from "../assets/appstore.png"

const Home = () => {
  return (
    <View style={styles.container}>
        <Image source={Logo} style={styles.img}/>
      <Text style={styles.title}>Page Title</Text>
      <Text style={{ marginTop: 15 }}>Content of the page</Text>

       
    </View>
  );
};

export default Home;

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
  img:{
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  
});
