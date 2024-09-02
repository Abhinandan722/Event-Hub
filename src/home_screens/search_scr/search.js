import { StyleSheet, Text, View ,StatusBar, Image,TextInput,TouchableOpacity, FlatList,ActivityIndicator} from 'react-native'
import { responsiveFontSize,
       responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import React, { useEffect, useState } from 'react'
import { events } from '../../product';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
    const navigation=useNavigation()
    const [eventdata,setEventdata]=useState([]);
    const [search,setSearch]=useState('');
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
    <View style={{backgroundColor:'white',flex:1,padding:responsiveHeight(1),paddingHorizontal:responsiveWidth(6),}}>
         <StatusBar
        backgroundColor={'transparent'}
        //backgroundColor={'white'}
        barStyle="dark-content"
        translucent={true}
      />
      <View style={styles.header_view}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image 
            style={{tintColor:'rgba(18, 13, 38, 1)'}}
            source={require('../drawercomponent/drawerimages/arrow-left.png')}
            />
        </TouchableOpacity>
          
             <Text style={{color:'rgba(18, 13, 38, 1)',
              fontSize:responsiveFontSize(3),fontFamily:'AirbnbCereal_W_Md'
            }}>Search</Text>
      </View>
      <View style={styles.search_view}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: responsiveWidth(2),
              }}>
              <Image 
               style={{tintColor:'rgba(86, 105, 255, 1)'}}
              source={require('../drawercomponent/drawerimages/search1.png')} />
              <View style={styles.verticleLine}></View>
              <TextInput
              value={search}
              onChangeText={(text)=>setSearch(text)}
                placeholderTextColor="rgba(0, 0, 0, 1)"
                style={{
                  fontSize: responsiveFontSize(3),
                  color: "rgba(0, 0, 0, 1)",
                  opacity: 0.3,
                  width: responsiveWidth(50),
                  fontFamily:'AirbnbCereal_W_Bk'
                }}
                placeholder="Search..."
              />
            </View>
            <TouchableOpacity style={styles.filter_view}>
              <Image
                source={require('../drawercomponent/drawerimages/filter.png')}
                style={{tintColor: 'white'}}
              />
              <Text style={{color: 'white', fontSize: responsiveHeight(1.5),fontFamily:'AirbnbCereal_W_Bk'}}>
                Filters
              </Text>
            </TouchableOpacity>
          </View>

{
  loading?<View style={{height:responsiveHeight(35),alignItems:'center',justifyContent:'center'}}>
  <ActivityIndicator size='large' color="rgba(86, 105, 255, 1)" />
</View>: <FlatList
        // showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={eventdata}
        renderItem={({item})=>{
            return(
                <View style={styles.flatitem_view}>
              <Image
              style={{width:responsiveWidth(20),height:responsiveWidth(24),borderRadius:responsiveWidth(3.5),resizeMode:'contain'}}
              source={item.image}
              />
              <View style={{gap:responsiveHeight(0.5),alignSelf:'center'}}>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.name}>{item.name}</Text>
              </View>


                </View>
            )
        }}
        
        />
}
       
     
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    header_view:{
        flexDirection:'row',
        gap:responsiveWidth(3),
        alignItems:'center',
        marginTop:responsiveHeight(6)

    },
    search_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical:responsiveHeight(2),
        marginBottom:responsiveHeight(3)
      },
      verticleLine: {
        height: responsiveHeight(3),
        width: 1,
        backgroundColor: 'rgba(86, 105, 255, 1)',
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
        alignItems: 'center',
        gap: responsiveWidth(2),
        backgroundColor: 'rgba(240, 99, 90, 1)',
        paddingVertical: responsiveHeight(1),
        borderRadius: 100,
        padding: responsiveHeight(2),
        paddingVertical: responsiveHeight(1.2),
        elevation: 50,
        shadowColor: 'rgba(46, 46, 79, 0.12)',
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
        fontSize:responsiveFontSize(1.6),
      }
,      name:{
       color:'rgba(18, 13, 38, 1)'
       ,fontSize:responsiveFontSize(2.3),
       fontFamily:'AirbnbCereal_W_Md',
       width:responsiveWidth(50),
       lineHeight:responsiveHeight(3)

      }
})