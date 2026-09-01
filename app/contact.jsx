import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'



export default contact

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
