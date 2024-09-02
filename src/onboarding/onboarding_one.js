import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Shadow} from 'react-native-shadow-2';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Onboarding_one = () => {
  const navigation = useNavigation();
  const handleDone = async () => {
    navigation.navigate('sign_in');
    
   await AsyncStorage.setItem('onboarded','1')
    
    
  };
  const doneButton = ({...props}) => {
    return (
      <View style={{flexDirection:'row',justifyContent:'space-between',
      width:responsiveWidth(88.5),
     //width:347 
      }}>

      <TouchableOpacity
      {...props}
      style={{marginRight: responsiveWidth(12)}}>
      <Text style={{fontSize: responsiveFontSize(2.3), 
        fontWeight: '500',color:'rgba(255, 255, 255, 1)'
        ,    fontFamily:'AirbnbCereal_W_Bl',
         opacity:0.5
        }}>Skip
      </Text>
    </TouchableOpacity>

    <TouchableOpacity
      {...props}
      style={{marginRight: responsiveWidth(12)}}>
      <Text style={{fontSize: responsiveFontSize(2.3), 
        fontWeight: '500',color:'rgba(255, 255, 255, 1)'
        ,    fontFamily:'AirbnbCereal_W_Bl'}}>Next
      </Text>
    </TouchableOpacity>
    </View>
    );
  };
  const Next = ({...props}) => (
   
       <TouchableOpacity
        {...props}
        style={{marginRight: responsiveWidth(12)}}>
        <Text style={{fontSize: responsiveFontSize(2.3), 
          fontWeight: '500',color:'rgba(255, 255, 255, 1)'
          ,    fontFamily:'AirbnbCereal_W_Bl'}}>Next
        </Text>
      </TouchableOpacity>
 
  
    );
    const skip =({...props}) => (
   
         <TouchableOpacity
          {...props}
          style={{marginLeft: responsiveWidth(12)}}>
          <Text style={{
            fontSize: responsiveFontSize(2.3),
            fontFamily:'AirbnbCereal_W_Bl',
            fontWeight: '500',color:'rgba(255, 255, 255, 1)',opacity:0.5}}>Skip
          </Text>
        </TouchableOpacity>
   
     
      );
      const CustomDotComponent = ({ selected }) => {
        let backgroundColor = selected ? 'white' : 'gray' // Change 'blue' to your desired color
     
        return (
          <View
            style={{
              width: 6,
              height: 6,
              marginHorizontal: 3,
              backgroundColor,
              borderRadius: 3,
            
            }}
          />
        );
      };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor={'white'}
        barStyle="dark-content"
        translucent={false}
      />
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}      
        DoneButtonComponent={doneButton}
        bottomBarHighlight={true}
       bottomBarHeight={responsiveHeight(10.5)}
   
       NextButtonComponent={Next}
       SkipButtonComponent={skip}
    
      DotComponent={CustomDotComponent}
 bottomBarColor={'rgba(86, 105, 255, 1)'}
        pages={[
          {
            backgroundColor: 'white',
            image: (
              <View style={{height: '100%', width: '100%'}}>
                <View style={styles.phone_view}>
                  <Image
                    style={{
                      // width:270,
                      width: responsiveWidth(95),

                      // height:478,
                      height: responsiveHeight(61.5),

                      resizeMode: 'cover',
                      position: 'relative',
                      //marginTop:40,
                      marginTop: responsiveHeight(5.5),
                    }}
                    source={require('../images/iphoneon.png')}
                  />
                </View>

                <View style={styles.bottom_view}>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(3),
                      color: 'white',
                      textAlign: 'center',
                      lineHeight: responsiveHeight(5),
                      marginHorizontal: responsiveWidth(10),
                      fontFamily: 'AirbnbCereal_W_Md',
                      fontWeight: '500',
                    }}>
                    Explore Upcoming and Nearby Event
                  </Text>

                  <Text
                    style={{
                      fontSize: responsiveFontSize(1.8),
                      color: 'rgba(255, 255, 255, 1)',
                      opacity: 0.8,
                      marginHorizontal: responsiveWidth(10),
                      textAlign: 'center',
                      lineHeight: responsiveHeight(3),
                      fontFamily: 'AirbnbCereal_W_Bk',
                    }}>
                    In publishing and graphic design, Lorem is a placeholder
                    text commonly
                  </Text>
                </View>
              </View>
            ),
            title: '',
            subtitle: '',
          },
          // secand obboarding screen------------------------------------

          {
            backgroundColor: 'white',
            image: (
              <View style={{height: '100%', width: '100%'}}>
                <View style={styles.phone_view}>
                  <Image
                    style={{
                       // width:270,
                       width: responsiveWidth(95),

                       // height:478,
                       height: responsiveHeight(61.5),
                      resizeMode: 'cover',
                      position: 'relative',
                           //marginTop:40,
                           marginTop: responsiveHeight(5.5),
                    }}
                    source={require('../images/calender.png')}
                  />
                </View>

                <View style={styles.bottom_view}>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(3),
                      color: 'white',
                      textAlign: 'center',
                      lineHeight: responsiveHeight(5),
                      marginHorizontal: responsiveWidth(10),
                      fontFamily: 'AirbnbCereal_W_Md',
                      fontWeight: '500',
                    }}>
                    
                    Web Have Modern Events Calendar Feature
                  </Text>

                  <Text
                    style={{
                      fontSize: responsiveFontSize(1.8),
                      color: 'rgba(255, 255, 255, 1)',
                      opacity: 0.8,
                      marginHorizontal: responsiveWidth(10),
                      textAlign: 'center',
                      lineHeight: responsiveHeight(3),
                      fontFamily: 'AirbnbCereal_W_Bk',
                    }}>In publishing and graphic design, Lorem is a placeholder
                    text commonly
                  </Text>
                </View>
              </View>
            ),
            title: '',
            subtitle: '',
          },
              // 3 obboarding screen------------------------------------
          {
            backgroundColor: 'white',
            image: (
              <View style={{height: '100%', width: '100%'}}>
                <View style={styles.phone_view}>
                  <Image
                    style={{
                       // width:270,
                       width: responsiveWidth(95),

                       // height:478,
                       height: responsiveHeight(61.5),
                      resizeMode: 'cover',
                      position: 'relative',
                           //marginTop:40,
                           marginTop: responsiveHeight(5.5),
                    }}
                    source={require('../images/mapon.png')}
                  />
                </View>

                <View style={styles.bottom_view}>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(3),
                      color: 'white',
                      textAlign: 'center',
                      lineHeight: responsiveHeight(5),
                      marginHorizontal: responsiveWidth(10),
                      fontFamily: 'AirbnbCereal_W_Md',
                      fontWeight: '500',
                    }}>To Look Up More Events or Activities Nearby By Map
                  </Text>

                  <Text
                    style={{
                      fontSize: responsiveFontSize(1.8),
                      color: 'rgba(255, 255, 255, 1)',
                      opacity: 0.8,
                      marginHorizontal: responsiveWidth(10),
                      textAlign: 'center',
                      lineHeight: responsiveHeight(3),
                      fontFamily: 'AirbnbCereal_W_Bk',
                    }}>In publishing and graphic design, Lorem is
                     a placeholder text commonly 
                  </Text>
                </View>
              </View>
            ),
            title: '',
            subtitle: '',
          },
        ]}
      />
    </View>
  );
};

export default Onboarding_one;

const styles = StyleSheet.create({
  phone_view: {
    width: '100%',
    height: 510,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  bottom_view: {
    width: '100%',
    height: 300,
    backgroundColor: 'rgba(86, 105, 255, 1)',
    borderRadius: 50,
    shadowColor: 'white',
    elevation: 100,
    alignItems: 'center',
    alignItems: 'center',
    paddingTop: responsiveHeight(7),
    gap: responsiveHeight(1),
  },
  shadow: {
    opacity: 0.7,
    position: 'absolute',
    width: '60%',
    height: '23%',
    backgroundColor: 'white',
    bottom: -2,
    zIndex: 1,
    elevation: 10,
    shadowColor: 'white',
  },
  // dotsselected:{
  //   color:'white',
  //   opacity:0.4
  // },
  //   dotsnotselected:{
  //   color:'white',
    
  // }
});
