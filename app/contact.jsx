import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const contact = () => {
  return (
     <View style={styles.container}>
         <Text style={styles.title}>Contact Us</Text>
         <Text style={{ marginTop: 15 }}>Content of the page</Text>
         <Link href="/" style={styles.link}>
           Back to home
         </Link>
       </View>
  )
}

