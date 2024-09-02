import { StyleSheet, Text, View ,StatusBar,Image,TouchableOpacity, FlatList,ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveHeight, responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native';
import { notification } from '../../product';

const Notification = () => {
    const navigation=useNavigation()
    const [data,setData]=useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchdata=async()=>{
         try{
          setData(notification)
           setLoading(false); 
         }catch(error){
           
         }}
     fetchdata()
   }, []);
  
   
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
       source={require('../drawercomponent/drawerimages/arrow-left.png')}
  
       />
   </TouchableOpacity >
     
        <Text style={{color:'rgba(18, 13, 38, 1)',
         fontSize:responsiveFontSize(3),fontFamily:'AirbnbCereal_W_Md'
       }}>Notification</Text>
</View>
<TouchableOpacity >
   <Image 
       style={{tintColor:'rgba(18, 13, 38, 1)'}}
     source={require('../drawercomponent/drawerimages/more-vertical.png')}
  
       />
   </TouchableOpacity>
   
 </View>
{/*-------------- this is a empty notification screeen start------------------------ */}
 {/* <View style={styles.noevent_view}>
   <View style={styles.noevent_center}>
     <Image
     style={{alignSelf:'center'}}
     //source={require('../images/Group33596.png')}
     source={require('../drawercomponent/drawerimages/Artwork.png')}
     />
     <Text style={{textAlign:'center',fontSize:responsiveFontSize(3),
     marginVertical:responsiveHeight(2),fontFamily:'AirbnbCereal_W_Md',color:'rgba(18, 13, 38, 1)'}}
     >No Notifications!</Text>
     <Text style={{textAlign:'center',color:'rgba(116, 118, 136, 1)',lineHeight:responsiveHeight(2.5),width:responsiveWidth(80),fontFamily:'AirbnbCereal_W_Bk'}}
     >Lorem ipsum dolor sit amet, consectetur adipiscing elit 
     sed do eiusmod tempor</Text>

   </View>

 </View> */}
{/* --------------this is a empty notification screen end -------------------------- */}
<View style={{marginVertical:responsiveHeight(4)}}>
  {
    loading?<View style={{height:responsiveHeight(35),alignItems:'center',justifyContent:'center'}}>
    <ActivityIndicator size='large' color="rgba(86, 105, 255, 1)" />
  </View>:<FlatList 
data={data}
renderItem={({item})=>{
    return(
        <View style={{marginVertical:responsiveHeight(1)}}>
            <View style={styles.topview_notification}>
                <View style={{flexDirection:'row',gap:responsiveWidth(4)}}>
                <Image 
                 source={item.image}
                 />
                 <View>
                 <View style={{flexDirection:'row'}}>
                    <Text
                    style={{color:'rgba(6, 5, 24, 1)',fontFamily:'AirbnbCereal_W_Md',
                fontSize:responsiveFontSize(2)}}
                    >{item.name} </Text>
                    <Text
                    style={{color:'rgba(60, 62, 86, 1)',fontFamily:'AirbnbCereal_W_Bk'}}
                    >{item.position} </Text>
                 </View>
                 <Text
                  style={{color:'rgba(60, 62, 86, 1)',fontFamily:'AirbnbCereal_W_Bk',
                  marginVertical:responsiveHeight(0.5)
                }}
                 >{item.description}</Text>

                 {
                    item.accept && item.reject ?  <View style={{flexDirection:'row',gap:responsiveWidth(5),
                    marginVertical:responsiveHeight(1)}}>
                        <TouchableOpacity 
                        style={styles.rejectbtn}
                         >
                            <Text style={{fontFamily:'AirbnbCereal_W_Bk'}}>{item.reject}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                          style={styles.acceptbtn}
                          >
                            <Text style={{color:'white',fontFamily:'AirbnbCereal_W_Bk'}}>{item.accept}</Text>
                        </TouchableOpacity>
    
                     </View> : null
                 }
                
                 
                 </View>
                
                </View>
                <Text
                style={{color:'rgba(60, 62, 86, 1)',fontFamily:'AirbnbCereal_W_Bk'}}
                >{item.time}</Text>
             

            </View>
        </View>
    )
}}
/>
  }


</View>

</View>
  )
}

export default Notification

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
       topview_notification:{
        flexDirection:'row',
        justifyContent:'space-between'
       },
       rejectbtn:{
        borderWidth:1,
        borderColor:'rgba(238, 238, 238, 1)',
        paddingHorizontal:responsiveWidth(6),
        paddingVertical:responsiveHeight(1),
        borderRadius:responsiveWidth(2)
       },
       acceptbtn:{
       backgroundColor:'rgba(86, 105, 255, 1)',
        paddingHorizontal:responsiveWidth(6),
        paddingVertical:responsiveHeight(1),
        borderRadius:responsiveWidth(2)
       }
})