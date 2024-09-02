import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize } from 'react-native-responsive-dimensions'

const Plus = () => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
    <Text style={{color:'rgba(86, 105, 255, 1)',fontSize:responsiveFontSize(6),fontWeight:'500'}}>...</Text>
  </View>
  )
}

export default Plus

const styles = StyleSheet.create({})