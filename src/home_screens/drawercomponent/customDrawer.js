import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native';
const CustomDrawer = () => {
  const navigation=useNavigation()
  return (
    
    <View style={{flex:1,paddingVertical:responsiveHeight(6),paddingLeft:responsiveWidth(6)}}>
     <View style={{}}>
        <Image
        source={require('./drawerimages/Rectangle4158.png')} style={{ marginVertical:responsiveHeight(1.5)  }}/>
        <Text style={{color:'rgba(0, 0, 0, 1)',fontWeight:'500',fontSize:responsiveFontSize(2.5),fontFamily:'AirbnbCereal_W_Md'
        
      }}
        >Ashfak Sayem</Text>
     </View>

     <View style={{gap:responsiveHeight(4.1), marginVertical:responsiveHeight(7.5)}}>

      <TouchableOpacity 
       onPress={()=>navigation.navigate('org_pf_about')}
       style={{flexDirection:'row',gap:responsiveWidth(4),alignItems:'center'}}>
        <Image 
         source={require('./drawerimages/Group18835.png')}
        />
        <Text 
         style={{color:'rgba(0, 0, 0, 1)',fontSize:responsiveFontSize(2),fontFamily:'AirbnbCereal_W_Bk'}}
         >My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',gap:responsiveWidth(4),alignItems:'center'}}>
        <Image 
         source={require('./drawerimages/Group18836.png')}
        />
        <Text 
         style={{color:'rgba(0, 0, 0, 1)',fontSize:responsiveFontSize(2),fontFamily:'AirbnbCereal_W_Bk'}}
         >Massage</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',gap:responsiveWidth(4),alignItems:'center'}}>
        <Image 
         source={require('./drawerimages/Group18858.png')}
        />
        <Text 
         style={{color:'rgba(0, 0, 0, 1)',fontSize:responsiveFontSize(2),fontFamily:'AirbnbCereal_W_Bk'}}
         >Calender</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',gap:responsiveWidth(4),alignItems:'center'}}>
        <Image 
         source={require('./drawerimages/Group18859.png')}
        />
        <Text 
         style={{color:'rgba(0, 0, 0, 1)',fontSize:responsiveFontSize(2),fontFamily:'AirbnbCereal_W_Bk'}}
         >Bookmark</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',gap:responsiveWidth(4),alignItems:'center'}}>
        <Image 
         source={require('./drawerimages/Group18832.png')}
        />
        <Text 
         style={{color:'rgba(0, 0, 0, 1)',fontSize:responsiveFontSize(2),fontFamily:'AirbnbCereal_W_Bk'}}
         >Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',gap:responsiveWidth(4),alignItems:'center'}}>
        <Image 
         source={require('./drawerimages/Group18857.png')}
        />
        <Text 
         style={{color:'rgba(0, 0, 0, 1)',fontSize:responsiveFontSize(2),fontFamily:'AirbnbCereal_W_Bk'}}
         >Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',gap:responsiveWidth(4),alignItems:'center'}}>
        <Image 
         source={require('./drawerimages/Group18831.png')}
        />
        <Text 
         style={{color:'rgba(0, 0, 0, 1)',fontSize:responsiveFontSize(2),fontFamily:'AirbnbCereal_W_Bk'}}
         >Helps & FAQs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',gap:responsiveWidth(4),alignItems:'center'}}>
        <Image 
         source={require('./drawerimages/Group18861.png')}
        />
        <Text 
         style={{color:'rgba(0, 0, 0, 1)',fontSize:responsiveFontSize(2),fontFamily:'AirbnbCereal_W_Bk'}}
         >Sign Out</Text>
      </TouchableOpacity>

     </View>

     <TouchableOpacity style={{marginTop:responsiveHeight(9),backgroundColor:'rgba(0, 248, 255, 0.2)',opacity:0.5,
           width:responsiveWidth(34),borderRadius:8,
           height:responsiveHeight(5),alignItems:'center',justifyContent:'center',flexDirection:'row',gap:responsiveWidth(2)
    }}>
        <Image 
         source={require('./drawerimages/Vector.png')}
        />
      <Text style={{color:'rgba(0, 248, 255, 1)',fontFamily:'AirbnbCereal_W_Bd'}}>Upgrade Pro</Text>
     </TouchableOpacity>

    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})