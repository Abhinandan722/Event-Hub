import { StyleSheet, Text, View ,StatusBar,Image,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { responsiveHeight, responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native';

const Eventsscreen = () => {
  const navigation=useNavigation()
  const[isactive,setIsactive]=useState(1)
  return (
    <View style={{flex:1,backgroundColor:'rgba(255, 255, 255, 1)',padding:responsiveHeight(1),paddingHorizontal:responsiveWidth(6)}}>
       
         <StatusBar
        backgroundColor={'transparent'}
        barStyle="dark-content"
     
      />
   <View style={styles.header_view}>
    <View style={{flexDirection:'row',alignItems:'center',gap:responsiveWidth(5)}}>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image 
            style={{tintColor:'rgba(18, 13, 38, 1)'}}
            source={require('./drawercomponent/drawerimages/arrow-left.png')}
            />
        </TouchableOpacity >
          
             <Text style={{color:'rgba(18, 13, 38, 1)',
              fontSize:responsiveFontSize(3),fontFamily:'AirbnbCereal_W_Md'
            }}>Events</Text>
    </View>
    <TouchableOpacity >
        <Image 
            style={{tintColor:'rgba(18, 13, 38, 1)'}}
            source={require('../images/more-vertical.png')}
            />
        </TouchableOpacity>
        
      </View>
      <View style={styles.event_btn}>

    <TouchableOpacity 
     onPress={()=>setIsactive(1)}
    style={[styles.upcamingbtn,{backgroundColor:isactive==1?'white':'transparent'}]}>
      <Text 
      style={{ fontFamily:'AirbnbCereal_W_Bk',
      color:isactive==1?'rgba(86, 105, 255, 1)':'rgba(155, 155, 155, 1)' }}
       >UPCOMING</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={()=>setIsactive(2)}
    style={[styles.upcamingbtn,{backgroundColor:isactive==2?'white':'transparent'}]}>
      <Text
         style={{ fontFamily:'AirbnbCereal_W_Bk',
         color:isactive==2?'rgba(86, 105, 255, 1)':'rgba(155, 155, 155, 1)'}}
      
      >PAST EVENTS</Text>
    </TouchableOpacity>
      </View>
      <View style={styles.noevent_view}>
        <View style={styles.noevent_center}>
          <Image
          style={{alignSelf:'center'}}
          source={require('../images/Group33596.png')}
          />
          <Text style={{textAlign:'center',fontSize:responsiveFontSize(3),
          marginVertical:responsiveHeight(2),fontFamily:'AirbnbCereal_W_Md',color:'rgba(18, 13, 38, 1)'}}
          >No Upcoming Event</Text>
          <Text style={{textAlign:'center',color:'rgba(116, 118, 136, 1)',lineHeight:responsiveHeight(2.5),width:responsiveWidth(60),fontFamily:'AirbnbCereal_W_Bk'}}
          > Lorem ipsum dolor sit amet, consectetur </Text>

        </View>

      </View>

      <TouchableOpacity 
         
          onPress={()=>navigation.navigate('allevents')}
          style={styles.sign_btn}>
            <Text style={{color: 'white', fontSize: responsiveFontSize(2)
          ,   fontWeight: '400',
          fontFamily:'AirbnbCereal_W_Xbd',
          
          }}>Explore Events 
            </Text>
            <Image
              style={{
                
                width: responsiveWidth(6.9),
                height: responsiveHeight(3.6),
                resizeMode: 'contain',
                position: 'absolute',
                right: responsiveWidth(4),
              }}
              source={require('../images/Group4.png')}
       
            />
          </TouchableOpacity>
    </View>
  )
}

export default Eventsscreen

const styles = StyleSheet.create({
 header_view:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  marginTop:responsiveHeight(7)

 },
 event_btn:{
  backgroundColor:'rgba(0, 0, 0, 0.03)',
  flexDirection:'row',
  paddingVertical:responsiveHeight(1),
  borderRadius:responsiveWidth(10),
  width:'90%',
  alignSelf:'center',
  marginVertical:responsiveHeight(3),
  justifyContent:'space-around'
 },
 upcamingbtn:{
  padding:responsiveWidth(2),
  paddingHorizontal:responsiveWidth(7),
  borderRadius:responsiveWidth(10),
  fontFamily:'AirbnbCereal_W_Md',
  // shadowColor:'rgba(0, 0, 0, 0.4)',
  // elevation:4

 },
 noevent_view:{
  width:'100%',
  height:'65%',
  justifyContent:'center',
  alignItems:'center',
 },

 sign_btn: {
  backgroundColor: 'rgba(86, 105, 255, 1)',
  width: '80%',
  alignSelf: 'center',
  paddingVertical: responsiveHeight(2),
  borderRadius: responsiveWidth(3),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
},

})