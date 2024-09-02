import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {createDrawerNavigator } from '@react-navigation/drawer'
import Profile from '../profile';
import Bottom_navigation from '../bottom_navigation';
import CustomDrawer from './customDrawer';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Drawerscreen = () => {
    const drawer=createDrawerNavigator();
  return (
    <View style={{flex:1}}>
<drawer.Navigator initialRouteName="home" drawerType="slide"
drawerContent={props=><CustomDrawer {...props}
drawerType="slide"
/>}

   screenOptions={{
    headerShown:false,
   overlayColor:'FFFFFF',
   headerBackgroundContainerStyle:true
   
   }}
  


  
   
 >
  <drawer.Screen 
  options={{
  }}
  name='bottom_navigation' component={Bottom_navigation}/>
</drawer.Navigator>
     
    </View>
  )
}

export default Drawerscreen

const styles = StyleSheet.create({


})