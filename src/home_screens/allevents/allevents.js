import { StyleSheet, Text, View ,StatusBar,Image,TouchableOpacity,FlatList,ActivityIndicator} from 'react-native'
import React, { useState ,useEffect} from 'react'
import { responsiveHeight, responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native';
import { events } from '../../product';
const Allevents = () => {
    const [eventdata,setEventdata]=useState([]);
    const navigation=useNavigation()
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchdata=async()=>{
         try{
          setEventdata(events)
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
                }}>Events</Text>
        </View>

        <View style={{flexDirection:'row',gap:responsiveWidth(6)}}>
        <Image 
                style={{tintColor:'rgba(18, 13, 38, 1)'}}
             
             source={require('../drawercomponent/drawerimages/search1.png')}
                />
        <TouchableOpacity >
            <Image 
                style={{tintColor:'rgba(18, 13, 38, 1)'}}
             
             source={require('../drawercomponent/drawerimages/more-vertical.png')}
                />
            </TouchableOpacity>
        </View>
       
            
          </View>
          {
            loading?<View style={{height:responsiveHeight(35),alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicator size='large' color="rgba(86, 105, 255, 1)" />
          </View>:<FlatList
        // showsHorizontalScrollIndicator={false}
        style={{marginTop:responsiveHeight(5)}}
        showsVerticalScrollIndicator={false}
        data={eventdata}
        renderItem={({item})=>{
            return(
                <View style={styles.flatitem_view}>
              <Image
              
              style={{width:responsiveWidth(20),height:responsiveWidth(24),
                borderRadius:responsiveWidth(3.5),resizeMode:'contain'}}
              source={item.image}
              />
              <View style={{gap:responsiveHeight(0.5),alignSelf:'center'}}>
                <Text style={styles.date}>{item.date_all_events}</Text>
                <Text style={styles.name}>{item.name}</Text>
                <View style={{flexDirection:'row',gap:responsiveWidth(1),alignItems:'center'}}>
                    <Image
                    
                    style={{opacity:0.6,tintColor:'rgba(116, 118, 136, 1)',width:responsiveHeight(2.5),height:responsiveHeight(2.5)}}
                    source={require('../drawercomponent/drawerimages/Group33338.png')}
                    />
                <Text 
                style={{color:'rgba(116, 118, 136, 1)',fontSize:responsiveFontSize(1.7)}}
                >{item.locationname}</Text>
                </View>
               
              </View>


                </View>
            )
        }}
        
        />
          }
          

     
    
        
        </View>
      )
    }

export default Allevents

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
      flatitem_view:{
        flexDirection:'row',
        marginBottom:responsiveHeight(2),
        padding:responsiveHeight(1.2),
        borderRadius:responsiveHeight(2),
        gap:responsiveWidth(5),
        shadowColor:'rgba(83, 89, 144, 0.07)',elevation:8,
        borderWidth:1,
        borderColor:'rgba(83, 89, 144, 0.07)',
        backgroundColor:'white',
      },
      date:{
        color:'rgba(86, 105, 255, 1)',
        fontFamily:'AirbnbCereal_W_Md',
        fontSize:responsiveFontSize(1.5),
      }
,      name:{
       color:'rgba(18, 13, 38, 1)'
       ,fontSize:responsiveFontSize(2.2),
       fontFamily:'AirbnbCereal_W_Md',
       width:responsiveWidth(50),
       lineHeight:responsiveHeight(3)

      }
})