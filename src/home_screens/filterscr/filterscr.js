import {StyleSheet, Text, View, StatusBar, Image,ScrollView,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';

const Filterscr = () => {
    const [toggle,setToggle]=useState(2)
    const [lastbtn,setLastbtn]=useState(2)
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="dark-content"
        translucent={true}
      />
      <Image
        style={{alignSelf: 'center', marginTop: responsiveHeight(6)}}
        source={require('../drawercomponent/drawerimages/bg.png')}
      />
      <View style={styles.main_view}>
        <View style={styles.linehorizontal}></View>
        <Text style={styles.filtertext}>Filter</Text>
        <View>  
        <ScrollView
        style={{
                       
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row', gap: responsiveWidth(3),height:responsiveHeight(14)}}>
            <View style={styles.allfilterbtn_view}>
            <TouchableOpacity
            style={[styles.filter, {backgroundColor: 'rgba(86, 105, 255, 1)',
            shadowColor:'rgba(86, 105, 255, 1)',elevation:10}]}>
            <Image source={require('../drawercomponent/drawerimages/2476154(1).png')} />
            
          </TouchableOpacity>
          <Text style={styles.allfilter_text}>Sports</Text>   
            </View>
         <View style={styles.allfilterbtn_view} >
         <TouchableOpacity
            style={[styles.filter, {}]}>
            <Image source={require('../drawercomponent/drawerimages/Group18215(1).png')} />
           
          </TouchableOpacity>
          <Text  style={styles.allfilter_text}>Music</Text> 
         </View>
         
          <View style={styles.allfilterbtn_view} >
          <TouchableOpacity
            style={[styles.filter, {backgroundColor: 'rgba(86, 105, 255, 1)',
            shadowColor:'rgba(86, 105, 255, 1)',elevation:10}]}>
            <Image source={require('../drawercomponent/drawerimages/Group18216.png')} />
           
          </TouchableOpacity>
          <Text  style={styles.allfilter_text}>Art</Text> 
         </View>
         
          <View style={styles.allfilterbtn_view} >
          <TouchableOpacity
            style={[styles.filter, {}]}>
            <Image source={require('../drawercomponent/drawerimages/685352.png')} />
            {/* <Text style={{color: 'white',fontFamily:'AirbnbCereal_W_Bk'}}>Art</Text> */}
          </TouchableOpacity>
          <Text  style={styles.allfilter_text}>Food</Text> 
         </View>
          

          <View style={styles.allfilterbtn_view} >
          <TouchableOpacity
            style={[styles.filter, {}]}>
            <Image source={require('../drawercomponent/drawerimages/685352.png')} />
            {/* <Text style={{color: 'white',fontFamily:'AirbnbCereal_W_Bk'}}>Foods</Text> */}
          </TouchableOpacity>
          <Text  style={styles.allfilter_text}>Food</Text> 
         </View>
         
        </View>
      </ScrollView>
      </View>
   <View style={styles.time_date_view}>
   <Text style={{color:'rgba(18, 13, 38, 1)',
   fontSize:responsiveFontSize(2.3),
   fontFamily:'AirbnbCereal_W_Md',
   fontWeight:'500'
   }}>Time & Date</Text>
   <View style={{flexDirection:'row',gap:responsiveWidth(5),marginVertical:responsiveHeight(2)}}>
    <TouchableOpacity 
    onPress={()=>setToggle(1)}
     style={[styles.daybtn,{backgroundColor:toggle==1?'rgba(86, 105, 255, 1)':'white'}]}>
        <Text style={{fontFamily:'AirbnbCereal_W_Xbd',color:toggle==1?'rgba(255, 255, 255, 1)':'rgba(128, 122, 122, 1)' }}>Today</Text>
    </TouchableOpacity >
    <TouchableOpacity     onPress={()=>setToggle(2)}
     style={[styles.daybtn,{backgroundColor:toggle==2?'rgba(86, 105, 255, 1)':'white'}]}>
        <Text  style={{fontFamily:'AirbnbCereal_W_Xbd',color:toggle==2?'rgba(255, 255, 255, 1)':'rgba(128, 122, 122, 1)'}}>Tomorrow</Text>
    </TouchableOpacity>
    <TouchableOpacity 
        onPress={()=>setToggle(3)}
    style={[styles.daybtn,{backgroundColor:toggle==3?'rgba(86, 105, 255, 1)':'white'}]}>
        <Text  style={{fontFamily:'AirbnbCereal_W_Xbd',color:toggle==3?'rgba(255, 255, 255, 1)':'rgba(128, 122, 122, 1)'}}>This week</Text>
    </TouchableOpacity>

   </View>
   <TouchableOpacity 
     style={[styles.calenderbtn,{}]}>
        <Image 
        source={require('../drawercomponent/drawerimages/Calendar(1).png')}/>
        <Text style={{fontFamily:'AirbnbCereal_W_Xbd',
        color:'rgba(128, 122, 122, 1)' }}
        >Choose from calender</Text>

         <Image 
        source={require('../drawercomponent/drawerimages/Vector9.png')}/>
    </TouchableOpacity >

   </View>
  <View>
  <Text style={{color:'rgba(18, 13, 38, 1)',
   fontSize:responsiveFontSize(2.3),
   fontFamily:'AirbnbCereal_W_Md',
   fontWeight:'500',
   marginTop:responsiveHeight(2)
   }}>Location</Text>
     <TouchableOpacity 
     style={[styles.location,{}]}>
        <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center',gap:responsiveWidth(5)}}>
        <Image 
        style={{resizeMode:'contain'}}
        source={require('../drawercomponent/drawerimages/Group18207.png')}/>
        <Text style={{fontFamily:'AirbnbCereal_W_Xbd',
        color:'rgba(20, 23, 54, 1)',fontSize:responsiveFontSize(2.3) }}
        >New Yourk, USA</Text>
        </View>
       
         <Image  style={{marginRight:responsiveWidth(2.4)}}
        source={require('../drawercomponent/drawerimages/Vector9.png')}/>
    </TouchableOpacity >
  </View>
  <View style={styles.tracview}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
        <Text style={styles.tracttextprice}
        >Select price range
        </Text>
        <Text style={styles.tracdolor}>$20-$120</Text>
    </View>
    <Image
    style={{marginTop:responsiveHeight(2),width:responsiveWidth(85)}}
    source={require('../drawercomponent/drawerimages/trac.png')}
    />

  </View>
  <View style={styles.last_view}>

<TouchableOpacity onPress={()=>setLastbtn(1)}
     style={[styles.lastbtn,{backgroundColor:lastbtn==1?'rgba(86, 105, 255, 1)':'white'}]}>
        <Text style={{fontFamily:'AirbnbCereal_W_Md',color:lastbtn==1?'white':'rgba(18, 13, 38, 1)' ,
        fontSize:responsiveFontSize(2)    
    }}
        >Reset</Text>
    </TouchableOpacity >
    <TouchableOpacity  onPress={()=>setLastbtn(2)}
     style={[styles.lastbtn,{backgroundColor:lastbtn==2?'rgba(86, 105, 255, 1)':'white',paddingHorizontal:responsiveWidth(16)}]}>
        <Text style={{fontFamily:'AirbnbCereal_W_Md',color:lastbtn==2?'white':'rgba(18, 13, 38, 1)' ,
        fontSize:responsiveFontSize(2)    
    }}
        >APPLY</Text>
    </TouchableOpacity >

  </View>

      </View>
      
    </View>
  );
};

export default Filterscr;

const styles = StyleSheet.create({
  main_view: {
    width: '100%',
    height: '94%',
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 1,
    bottom: responsiveHeight(-3),
    paddingVertical:responsiveHeight(1),
    paddingLeft:responsiveWidth(8),
    
    borderTopLeftRadius:responsiveHeight(6),
    borderTopRightRadius:responsiveHeight(6),
    borderBottomLeftRadius:responsiveHeight(0),
    borderBottomRightRadius:responsiveHeight(0),
  },
  linehorizontal:{
    width:responsiveWidth(8),
    height:responsiveWidth(1),
    backgroundColor:'rgba(178, 178, 178, 0.5)',
    alignSelf:'center',
    borderRadius:responsiveWidth(5),

  },
  filtertext:{
    color:'rgba(0, 0, 0, 1)',
    fontSize:responsiveFontSize(3),
    fontFamily:'AirbnbCereal_W_Md',
    marginVertical:responsiveHeight(2.5),
 fontWeight:'400',    
},
filter_view: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(93, 86, 243, 1)',
    width: responsiveWidth(20),
    height: responsiveWidth(8),
    borderRadius: responsiveHeight(10),
    justifyContent: 'center',
    gap: responsiveWidth(1),
    
  },
  filter: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 100,
    width:responsiveWidth(17),
    height:responsiveWidth(17),
    alignItems: 'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'rgba(229, 229, 229, 1)'
  },
  allfilterbtn_view:{
    gap:responsiveHeight(1),
    alignItems:'center',


  },
  allfilter_text:{
    color:'rgba(18, 13, 38, 1)',
    fontFamily:'AirbnbCereal_W_Xbd',
    fontSize:responsiveFontSize(2)
  },
  time_date_view:{
    marginVertical:responsiveHeight(3),

  },
  daybtn:{
    padding:responsiveWidth(2.2),
    backgroundColor:'white',
    paddingHorizontal:responsiveWidth(5),
    borderRadius:responsiveWidth(2),
    borderWidth:1,
    borderColor:'rgba(230, 230, 230, 1)'
  },
  calenderbtn:{
    padding:responsiveWidth(2.2),
    backgroundColor:'white',
    borderRadius:responsiveWidth(2),
    borderWidth:1,
    borderColor:'rgba(230, 230, 230, 1)',
      width:responsiveWidth(62),
    
      alignItems:'center',
      gap:responsiveWidth(3),flexDirection:'row',justifyContent:'center'
  },
  location:{
    padding:responsiveWidth(1),
    backgroundColor:'white',
    borderRadius:responsiveWidth(2),
    borderWidth:1,
    borderColor:'rgba(230, 230, 230, 1)',
      width:responsiveWidth(85),
      alignItems:'center',
      gap:responsiveWidth(3),flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:responsiveWidth(2),
      marginVertical:responsiveHeight(3)

  },
  tracview:{
    
    width:'93%',
    marginVertical:responsiveHeight(1),
   
    
  },
  tracttextprice:{
    color:'rgba(18, 13, 38, 1)',
   fontSize:responsiveFontSize(2.1),
   fontFamily:'AirbnbCereal_W_Md',
   fontWeight:'500',
  },
  tracdolor:{
    color:'rgba(63, 56, 221, 1)',
    fontSize:responsiveFontSize(2.2),
    fontFamily:'AirbnbCereal_W_Bk',
    fontWeight:'400'

  },
  last_view:{
    marginTop:responsiveHeight(5),
    flexDirection:'row',
    gap:responsiveWidth(8)
    
  },
  lastbtn:{
    padding:responsiveWidth(4),
    backgroundColor:'white',
    paddingHorizontal:responsiveWidth(11),
    borderRadius:responsiveWidth(3),
    borderWidth:1,
    borderColor:'rgba(230, 230, 230, 1)'
  },
});
