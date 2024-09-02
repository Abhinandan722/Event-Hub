import {Image, StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome = () => {
  const navigation = useNavigation();


  useEffect(() => {
    setTimeout(() => {
      checkIfAlreadyonboarding()
    
    }, 1000);
    
  },[]);
  const checkIfAlreadyonboarding=async()=>{
    let onboarded = await AsyncStorage.getItem('onboarded')
    if(onboarded==1){
 //hide the on boarded
navigation.navigate('sign_in');
    }else{
  //show the onboarded
navigation.navigate('boarding_one');

    }

  }
 

    
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="dark-content"
        translucent={true}
      />
      <View style={styles.welcome_view_main}>
        <Image
          style={{
            width: responsiveWidth(60),
            height: responsiveHeight(10),
            resizeMode: 'contain',
          }}
          source={require('../images/welcomeicon.png')}
        />
      </View>

      {/*--------------- this is a abslt view start---------------------- */}

      {/* <LinearGradient colors={['rgba(185, 218, 251, 0.5)','rgba(236, 172, 173, 0.5)',
                                'rgba(152, 149, 238, 0.5)','rgba(144, 162, 248, 0.5)',
                                'rgba(197, 84, 146, 0.5)',]}
                                 style={styles.bottom_view} locations={[0,0.5,0.6,0.8,0.6]} start={{x: 5, y: 8}} end={{x: 6, y: 7}}>
       </LinearGradient> */}
      <Image
        style={styles.bottom_view}
        source={require('../images/Ellipse71.png')}
      />

      <Image
        style={styles.right_view}
        source={require('../images/Ellipse70.png')}
      />

      <Image
        style={styles.top_view}
        source={require('../images/Ellipse.png')}
      />

      {/*--------------- this is a abslt view end ---------------------- */}
    </View>
  );
      
};

export default Welcome;

const styles = StyleSheet.create({
  welcome_view_main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_view: {
    position: 'absolute',
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    bottom: responsiveWidth(0),
  },
  right_view: {
    position: 'absolute',
    width: responsiveWidth(40),
    height: responsiveWidth(90),
    bottom: responsiveWidth(0),
    right: responsiveHeight(0),
  },

  top_view: {
    position: 'absolute',
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    right: responsiveWidth(0),
  },
});
