import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight ,responsiveWidth,responsiveFontSize} from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native';
const Profile = () => {
  const navigation=useNavigation()
  return (
    <View style={{flex:1,backgroundColor:'white',padding:responsiveWidth(2),paddingHorizontal:responsiveWidth(5),paddingRight:responsiveWidth(7)}}>
       <View style={styles.header_view}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image 
            style={{tintColor:'rgba(18, 13, 38, 1)'}}
          //  source={require('../drawercomponent/drawerimages/arrow-left.png')}
          source={require('./drawercomponent/drawerimages/arrow-left.png')}
             />
        </TouchableOpacity>
          
             <Text style={{color:'rgba(18, 13, 38, 1)',
              fontSize:responsiveFontSize(3),fontFamily:'AirbnbCereal_W_Md'
            }}>Profile</Text>
      </View>
      <View style={styles.main_profile_view}>
      <Image 
            style={{width:responsiveWidth(26),height:responsiveWidth(26),
              borderRadius:responsiveWidth(13),marginVertical:responsiveHeight(1),alignSelf:'center'}}
          source={require('./drawercomponent/drawerimages/image89.png')}
             />   
             <Text 
              style={{color:'rgba(18, 13, 38, 1)',
               fontSize:responsiveFontSize(3.3),
               fontFamily:'AirbnbCereal_W_Md',
               marginVertical:responsiveHeight(1)
               
            }}
             >Ashfak Sayem</Text>   
             <View style={styles.main_follower_view}>
              <View style={styles.following}>
                     <Text style={{color:'rgba(18, 13, 38, 1)',fontWeight:'500', fontFamily:'AirbnbCereal_W_Md',
                     fontSize:responsiveFontSize(2) 
                    }}
                     >350</Text>
                    <Text style={{color:'rgba(116, 118, 136, 1)',}}
                    >Following</Text>
              </View>
              <View style={styles.verticleLine}></View>
              <View style={styles.followers}>
                    <Text style={{color:'rgba(18, 13, 38, 1)',fontWeight:'500', fontFamily:'AirbnbCereal_W_Md',
                     fontSize:responsiveFontSize(2) }}
                    >346</Text>
                    <Text 
                    style={{color:'rgba(116, 118, 136, 1)'}}
                    >Following</Text>

              </View>
              
              </View>
              <TouchableOpacity style={styles.editbtn}>
                <Image 
                source={require('./drawercomponent/drawerimages/Group33562.png')}
                 />
                <Text style={styles.editText}>Edit Profile</Text>
                </TouchableOpacity>    
      </View>
      <Text style={{color:'rgba(18, 13, 38, 1)',
              fontSize:responsiveFontSize(2.2),fontFamily:'AirbnbCereal_W_Md'
            }}> About Me</Text>
            <Text
            style={{ fontFamily:'AirbnbCereal_W_Bk',color:'rgba(18, 13, 38, 0.8)',
           lineHeight:responsiveHeight(3.1),fontSize:responsiveFontSize(2),width:responsiveWidth(85),marginVertical:responsiveHeight(1.8)
          }}
            >Enjoy your favorite dishe and a lovely your friends
             and family and have a great
             time. Food from local food trucks will be available for
              purchase.<Text style={{color:'rgba(86, 105, 255, 1)',fontSize:responsiveFontSize(2.2),}}>Read More </Text> 

            </Text>
            <View style={styles.secandlast}>
              <Text 
               style={{color:'rgba(23, 43, 77, 1)',fontSize:responsiveFontSize(2.4),fontWeight:'500',fontFamily:'AirbnbCereal_W_Md'}}
              >Interest</Text>
              <TouchableOpacity style={styles.changebtn}>
                <Image 
                source={require('./drawercomponent/drawerimages/edit-3.png')}
                 />
                <Text style={styles.changeText}>CHANGE</Text>
                </TouchableOpacity> 

            </View>
   {/* --------------------------------------------------------------- */}
  
        <View style={{flexDirection: 'row', gap: responsiveWidth(2),marginVertical:responsiveHeight(2),width:'100%',}}>
          <TouchableOpacity
            style={[styles.filter, {backgroundColor: 'rgba(107, 122, 237, 1)'}]}>
          
            <Text style={{color: 'white',fontFamily:'AirbnbCereal_W_Xbd'}}>Games Online</Text>
          </TouchableOpacity>
         
          <TouchableOpacity
            style={[styles.filter, {backgroundColor: 'rgba(238, 84, 74, 1)'}]}>
            
            <Text style={{color: 'white',fontFamily:'AirbnbCereal_W_Xbd'}}>Concert</Text>
          </TouchableOpacity>
           
          <TouchableOpacity
            style={[styles.filter, {backgroundColor: 'rgba(255, 141, 93, 1)'}]}>

            <Text style={{color: 'white',fontFamily:'AirbnbCereal_W_Cbd'}}>Music</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filter, {backgroundColor: 'rgba(125, 103, 238, 1)'}]}>
         
            <Text style={{color: 'white',fontFamily:'AirbnbCereal_W_Xbd'}}>Art</Text>
          </TouchableOpacity>
         
        </View>
        <View style={{flexDirection: 'row', gap: responsiveWidth(2.6),}}>
        <TouchableOpacity
            style={[styles.filter, {backgroundColor: 'rgba(41, 214, 151, 1)'}]}>

            <Text style={{color: 'white',fontFamily:'AirbnbCereal_W_Xbd'}}>Movie</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filter, {backgroundColor: 'rgba(57, 209, 242, 1)'}]}>
         
            <Text style={{color: 'white',fontFamily:'AirbnbCereal_W_Xbd'}}>Others</Text>
          </TouchableOpacity>
         
        </View>
       
         
     
     
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  header_view:{
    flexDirection:'row',
    gap:responsiveWidth(3),
    alignItems:'center',
    marginTop:responsiveHeight(6)

},
main_profile_view:{
  marginVertical:responsiveHeight(3),
  alignSelf:'center'
},
verticleLine: {
  height: responsiveHeight(5),
  width: 1,
  backgroundColor: 'rgba(221, 221, 221, 1)',
  alignSelf:'center'
},
main_follower_view:{
  flexDirection:'row',
  gap:responsiveWidth(5),alignItems:'center',
  marginVertical:responsiveHeight(1.3)
},
following:{
  gap:responsiveHeight(1.2),alignItems:'center'
},
followers:{
  gap:responsiveHeight(1.2),
  alignItems:'center'
},
editbtn:{
  width:responsiveWidth(40),
  borderWidth:1,
  borderColor:'rgba(86, 105, 255, 1)',
padding:responsiveWidth(2.8),
alignItems:'center',
gap:responsiveWidth(4),
borderRadius:responsiveWidth(2),
flexDirection:'row',justifyContent:'center',
marginTop:responsiveHeight(2),alignSelf:'center'

},
editText:{
  color:'rgba(86, 105, 255, 1)',
  fontFamily:'AirbnbCereal_W_Bld'
},
changebtn:{
  backgroundColor:'rgba(86, 105, 255, 0.1)',
padding:responsiveWidth(1.4),
alignItems:'center',
gap:responsiveWidth(2),
borderRadius:responsiveWidth(10),
flexDirection:'row',justifyContent:'center',alignSelf:'center',
paddingHorizontal:responsiveWidth(2.4),
marginRight:responsiveWidth(2),

},
changeText:{
  color:'rgba(86, 105, 255, 1)',
  fontFamily:'AirbnbCereal_W_Bld',
  fontSize:responsiveFontSize(1.3),

},
secandlast:{
  alignItems:'center',flexDirection:'row',justifyContent:'space-between'

},
filter: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: responsiveWidth(2),
  backgroundColor: 'rgba(240, 99, 90, 1)',
  paddingVertical: responsiveHeight(1),
  borderRadius: 100,
  padding: responsiveHeight(2),
  paddingVertical: responsiveHeight(.8),
  },
})