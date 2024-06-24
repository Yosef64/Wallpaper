import { View, Text } from 'react-native'
import React from 'react'

export default function About() {
  return (
    <View style={styles.container}>
      <Text>About</Text>
    </View>
  )
}
const styles = {
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#272042"
    }
}