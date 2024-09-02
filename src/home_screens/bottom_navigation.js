import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './home';
import Eventsscreen from './eventsscreen';
import Map from './map';
import Profile from './profile';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Plus from './plus';

const Bottom_navigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
         // Change background color
            height: responsiveHeight(10), // Change tab bar height
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center',}}>
                  <Image source={require('../images/Group33335.png')}
                   style={{tintColor:focused?'rgba(86, 105, 255, 1)':'gray',opacity:focused?1:0.5}} />
                  <Text 
                   style={{color:focused?'rgba(86, 105, 255, 1)':'gray',opacity:focused?1:0.5,fontFamily: 'AirbnbCereal_W_Bk',}}
                   >Home</Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="eventscreen"
          component={Eventsscreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                     <Image source={require('../images/Calendar.png')}
                      style={{tintColor:focused?'rgba(86, 105, 255, 1)':'gray',opacity:focused?1:0.5}}
                     />
                  <Text 
                style={{fontFamily: 'AirbnbCereal_W_Bk',color:focused?'rgba(86, 105, 255, 1)':'gray',opacity:focused?1:0.5}}
                    >Events</Text>
                </View>
              );
            },
          }}
        />
          <Tab.Screen
          name="plus"
          component={Plus}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{
                  top:responsiveHeight(-3)
                }}> 
                    <Image
                   source={require('../images/Group33324.png')}  style={{height:responsiveHeight(13),width:responsiveHeight(13)}} />
                </View>
              );
            },
          }}
        />
          <Tab.Screen
          name="map"
          component={Map}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center',}}>
                  <Image source={require('../images/Group33338.png')}
                   style={{tintColor:focused?'rgba(86, 105, 255, 1)':'gray',opacity:focused?1:0.5}} />
                  <Text 
                   style={{fontFamily: 'AirbnbCereal_W_Bk',color:focused?'rgba(86, 105, 255, 1)':'gray',opacity:focused?1:0.5}}
                   >Map</Text>
                </View>
              );
            },
          }}
        />
          <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center',}}>
                  <Image source={require('../images/Group33337.png')}
                   style={{tintColor:focused?'rgba(86, 105, 255, 1)':'gray',opacity:focused?1:0.5}} />
                  <Text 
                   style={{fontFamily: 'AirbnbCereal_W_Bk',color:focused?'rgba(86, 105, 255, 1)':'gray',opacity:focused?1:0.5}}
                   >Profile</Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Bottom_navigation;

const styles = StyleSheet.create({});
