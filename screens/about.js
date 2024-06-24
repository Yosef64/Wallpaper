import { View, Text, BackHandler } from 'react-native'
import React from 'react'

export default function About() {
  return (
    <View style={styles.container}>
      <Text >About me john</Text>
    </View>
  )
}
const styles = {
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#EEEEEE"
        
        
    }
}