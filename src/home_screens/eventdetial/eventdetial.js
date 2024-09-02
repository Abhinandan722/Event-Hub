import { StyleSheet, Text, View,StatusBar, Image, 
  TouchableOpacity,Modal } from 'react-native'
import React, { useState } from 'react'
import { responsiveFontSize, responsiveHeight, 
  responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native';
import Modall from './Modal';
const Eventdetial = () => {
    const navigation=useNavigation()
    const [isvisible,setIsvisible]=useState(false)

  return (
    <View style={{flex:1,position:'relative'}} >
         <StatusBar backgroundColor={'transparent'} barStyle="light-content"
           translucent={true} />
        
           <Image 
           style={{width:'100%',height:responsiveHeight(33)}}
            source={require('../drawercomponent/drawerimages/image77.png')}
           />
           {/* this is a   absolute view */}

          
         <View style={{position:'absolute',flexDirection:'row',
         marginTop:responsiveHeight(7),left:responsiveWidth(6),gap:responsiveWidth(5)
         ,alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image 
           style={{}}
            source={require('../drawercomponent/drawerimages/arrow-left.png')}
           />
                </TouchableOpacity>
       
           <Text style={{color:'white',fontSize:responsiveFontSize(3),fontFamily:'AirbnbCereal_W_Md'}}>Event Details</Text>
         </View>
         <TouchableOpacity style={{position:'absolute',marginTop:responsiveHeight(7),
         right:responsiveWidth(6),backgroundColor:'rgba(255, 255, 255, 0.3)',
         padding:responsiveWidth(2.5),borderRadius:responsiveHeight(1),}}>
         <Image 
           style={{}}
            source={require('../drawercomponent/drawerimages/Group18129(1).png')}
           />
         </TouchableOpacity>

         <View style={{width:'80%',flexDirection:'row',alignSelf:'center',
         justifyContent:'space-between',position:'absolute',backgroundColor:'white',
         padding:responsiveHeight(1),borderRadius:responsiveWidth(10),
         top:responsiveHeight(29),alignItems:'center',
         paddingHorizontal:responsiveWidth(4),paddingVertical:responsiveHeight(1.4),
         shadowColor:'rgba(90, 90, 90, 0.1)',elevation:70}}>
            <View style={{flexDirection:'row',alignSelf:'center',
            alignItems:'center',gap:responsiveWidth(2)}}>
            <Image 
           style={{}}
            source={require('../drawercomponent/drawerimages/Group(3).png')}
           />
           <Text style={{color:'rgba(63, 56, 221, 1)',
           fontSize:responsiveFontSize(1.7),fontFamily:'AirbnbCereal_W_Md'
           }}>+20 Going</Text>
            </View>
            <TouchableOpacity 
             onPress={()=>navigation.navigate('invite_friend')}
            style={{backgroundColor:'rgba(86, 105, 255, 1)',
            paddingHorizontal:responsiveWidth(4),
            borderRadius:responsiveWidth(2),alignSelf:'center',
            padding:responsiveHeight(0.7),}}>
                <Text style={{color:'white'}}>Invite</Text>
            </TouchableOpacity>
       

         </View>
          {/* this is a   absolute view */}
          <View style={styles.main_view}> 
          <Text style={styles.InternationalBand}>
          International Band Music Concert
          </Text>
          <View style={{flexDirection:'row',gap:responsiveWidth(4),marginVertical:responsiveHeight(3)}}>
          <Image 
           style={{}}
            source={require('../drawercomponent/drawerimages/Date.png')}
           />
           <View style={{justifyContent: 'space-around',}}>
            <Text style={{color:'rgba(18, 13, 38, 1)',fontFamily:'AirbnbCereal_W_Md',
          fontSize:responsiveFontSize(2)
        }}>14 December, 2021</Text>
            <Text  style={{fontSize:responsiveFontSize(1.5)}}>Tuesday, 4:00PM - 9:00PM</Text>
           </View>

          </View>
          <View style={{flexDirection:'row',gap:responsiveWidth(4),marginVertical:responsiveHeight(0)}}>
          <Image 
           style={{}}
            source={require('../drawercomponent/drawerimages/Location.png')}
           />
           <View style={{justifyContent: 'space-around',}}>
            <Text style={{color:'rgba(18, 13, 38, 1)',fontFamily:'AirbnbCereal_W_Md',
          fontSize:responsiveFontSize(2)
        }}>Gala Convention Center</Text>
            <Text style={{fontSize:responsiveFontSize(1.5)}}>36 Guild Street London, UK </Text>
           </View>

          </View>
          <View style={styles.orgprofile_view}>
               <View style={{flexDirection:'row',gap:responsiveWidth(4),}}>
               <Image 
           style={{}}
            source={require('../drawercomponent/drawerimages/Image.png')}
           />
           <View style={{justifyContent:'space-around'}}>
            <Text 
             style={{color:'rgba(13, 12, 38, 1)',fontSize:responsiveFontSize(1.9),
             fontFamily:'AirbnbCereal_W_Bk'
            }}
             >Ashfak Sayem</Text>
            <Text 
             style={{fontSize:responsiveFontSize(1.5),fontFamily:'AirbnbCereal_W_Bk'}}
             >Organizer</Text>
           </View>
               </View>
               <TouchableOpacity  style={{backgroundColor:'rgba(86, 105, 255, 0.2)',height:responsiveHeight(3.7),width:responsiveHeight(8),borderRadius:responsiveHeight(1),justifyContent:'center',alignSelf:'center',}} >
            
               <Text style={{color:'rgba(86, 105, 255, 1)',alignSelf:'center',fontFamily:'AirbnbCereal_W_Bk',}}>Follow</Text>
               </TouchableOpacity>
             
          </View>

          <Text 
           style={{color:'rgba(18, 13, 38, 1)',fontSize:responsiveFontSize(2.4),fontFamily:'AirbnbCereal_W_Md'}}
            >About Event</Text>

          <Text style={styles.loremText}
          >
          Enjoy your favorite dishe and a lovely your friends and family and have a 
          great time. Food from local food trucks will be available for
           purchase. Read More...
          </Text>


          </View>
          {/* --------------bottom absoult---------------- */}

          <TouchableOpacity 
          style={styles.sign_btn}>
            <Text style={{color: 'white', fontSize: responsiveFontSize(2)
          ,   fontWeight: '400',
          fontFamily:'AirbnbCereal_W_Md',
          }}>Buy Ticket $120
            </Text>
            <Image
              style={{
                
                width: responsiveWidth(6.9),
                height: responsiveHeight(3.6),
                resizeMode: 'contain',
                position: 'absolute',
                right: responsiveWidth(4),
              }}
              source={require('../drawercomponent/drawerimages/Group4.png')}
            />
          </TouchableOpacity>

          <Image 
           style={styles.shadowimg}
            source={require('../drawercomponent/drawerimages/Rectangle4189.png')}
           />
              {/* --------------bottom absoult---------------- */}
 
    </View>
  )
}

export default Eventdetial

const styles = StyleSheet.create({
main_view:{
    marginTop:responsiveHeight(5),
    margin:responsiveWidth(6)

    },
    InternationalBand:{
        fontSize:responsiveFontSize(4.5),
        lineHeight:responsiveHeight(6),
        color:'rgba(18, 13, 38, 1)',
        fontFamily:'AirbnbCereal_W_Bk'
    },
    orgprofile_view:{
        flexDirection:'row',
        marginVertical:responsiveHeight(4),
        justifyContent:'space-between',
        
    },
loremText:{
  fontSize:responsiveFontSize(2),
  color:'rgba(18, 13, 38, 1)',
  marginTop:responsiveHeight(1.3),
  fontFamily:'AirbnbCereal_W_Bk',
  lineHeight:responsiveHeight(3),
},
sign_btn: {
  backgroundColor: 'rgba(86, 105, 255, 1)',
  width: '70%',
  alignSelf: 'center',
  paddingVertical: responsiveHeight(2),
  borderRadius: responsiveWidth(3),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  marginVertical: responsiveHeight(2),
  position:'absolute',
  bottom:responsiveHeight(0.2),
  zIndex:1
},
shadowimg:{
  position:'absolute',
  bottom:0,zIndex:0,
width:'100%',
height:responsiveHeight(16),
}


})