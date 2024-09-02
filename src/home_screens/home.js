import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Modal,
  ActivityIndicator
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Products} from '../product';
import { useNavigation } from '@react-navigation/native';
import {createDrawerNavigator } from '@react-navigation/drawer'



const Home = () => {

  const navigation=useNavigation()
  const drawer=createDrawerNavigator();
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  
  useEffect(() => {
     const fetchdata=async()=>{
        try{
         setData(Products);
          setLoading(false); 
        }catch(error){
          
        }
    }
    fetchdata()
  }, []);

 
  return (
    <View style={{position: 'relative', backgroundColor: 'white', flex: 1}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="light-content"
        translucent={true}
      />

    
      
      {/*------------------------------ header  start--------------------------------------- */}
      <View style={styles.header_view}>
        <View style={styles.headerinner1}>
          <View style={styles.drower_view}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
              <Image source={require('../images/Combined.png')} />
            </TouchableOpacity>

            <View style={{gap: responsiveHeight(0.5)}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    color: 'rgba(255, 255, 255, 1)',
                    fontSize: responsiveFontSize(1.5),
                    fontFamily: 'AirbnbCereal_W_Bk',
                    marginRight: 2,
                    opacity:0.7
                  }}>
                  Current Location
                </Text>
                <Image source={require('../images/crt.png')} />
              </View>
              <Text
                style={{
                  color: 'rgba(244, 244, 254, 1)',
                  fontSize: responsiveFontSize(1.8),
                  fontFamily: 'AirbnbCereal_W_Md',
                  fontWeight: '500',
                }}>
                New Yourk, USA
              </Text>
            </View>

            <TouchableOpacity onPress={()=>navigation.navigate('notification')}>
              <Image source={require('../images/notifications.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.search_view}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: responsiveWidth(2),
              }}>
              <Image source={require('../images/search1.png')} />
              <View style={styles.verticleLine}></View>
              <TextInput
              onPressIn={()=>navigation.navigate('search')}
                placeholderTextColor="rgba(255, 255, 255, 1)"
                style={{
                  fontSize: 20,
                  color: 'rgba(255, 255, 255, 1)',
                  opacity: 0.3,
                  width: responsiveWidth(50),
                }}
                placeholder="Search..."
              />
            </View>
            <TouchableOpacity 
             onPress={()=>navigation.navigate('filterscr')}
              style={styles.filter_view}>
              <Image
                source={require('../images/filter.png')}
                style={{tintColor: 'rgba(162, 158, 240, 1)'}}
              />
              <Text style={{color: 'white', fontSize: responsiveHeight(1.5),fontFamily:'AirbnbCereal_W_Bk'}}>
                Filters
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/*------------------------------ header end--------------------------------------- */}
      {/*------------------------ filter btn start------------------------------ */}
      <ScrollView
        style={{
          marginLeft: responsiveWidth(5.5),
          position: 'absolute',
          top: responsiveHeight(21),
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row', gap: responsiveWidth(2.6)}}>
          <TouchableOpacity
            style={[styles.filter, {backgroundColor: 'rgba(240, 99, 90, 1)'}]}>
            <Image source={require('../images/2476154.png')} />
            <Text style={{color: 'white',fontFamily:'AirbnbCereal_W_Bk'}}>Sports</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filter, {backgroundColor: 'rgba(245, 151, 98, 1)'}]}>
            <Image source={require('../images/Group18215.png')} />
            <Text style={{color: 'white',fontFamily:'AirbnbCereal_W_Bk'}}>Music</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filter, {backgroundColor: 'rgba(41, 214, 151, 1)'}]}>
            <Image source={require('../images/Group18214.png')} />
            <Text style={{color: 'white',fontFamily:'AirbnbCereal_W_Bk'}}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filter, {backgroundColor: 'rgba(70, 205, 251, 1)'}]}>
            <Image source={require('../images/2476154.png')} />
            <Text style={{color: 'white',fontFamily:'AirbnbCereal_W_Bk'}}>Art</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filter, {backgroundColor: 'rgba(245, 151, 98, 1)'}]}>
            <Image source={require('../images/2476154.png')} />
            <Text style={{color: 'white',fontFamily:'AirbnbCereal_W_Bk'}}>Foods</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/*------------------------ filter btn end------------------------------ */}
      <ScrollView 
      showsVerticalScrollIndicator={false}
      style={{marginTop:responsiveHeight(5.5)}}
      >
      <View style={styles.main_view}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: responsiveWidth(1),
          
          }}>
          <Text
            style={{
              color: 'rgba(18, 13, 38, 1)',
              fontSize: responsiveFontSize(2.6),
             
              fontWeight: '500',
              fontFamily:'AirbnbCereal_W_Md'
            }}>
            Upcoming Events
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 3,
              marginRight: responsiveWidth(5),
            }}>
            <Text>See All</Text>
            <Image source={require('../images/Vector1.png')} />
          </View>
        </View>
        {/* ----------------------------------------end----------------- */}
{
  loading?<View style={{height:responsiveHeight(35),alignItems:'center',justifyContent:'center'}}>
  <ActivityIndicator size='large' color="rgba(86, 105, 255, 1)" />
</View>: <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{marginVertical: responsiveHeight(2),marginBottom:responsiveHeight(2.7)}}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  padding: responsiveHeight(1),
                  backgroundColor: 'rgba(255, 255, 255, 1)',

                  shadowColor: 'gba(80, 85, 136, 0.06)',
                  elevation: 1,
                  margin: responsiveWidth(1.5),
                  borderRadius: responsiveHeight(3),
                  marginLeft: responsiveWidth(0.2),
                  position:'relative'
                }}>
                  {/*------------------------ this is  absoulte view in flat list- start----------- */}

                    <TouchableOpacity 
                    onPress={()=>navigation.navigate('eventdetial')}
                    style={{position:'relative'}}>
                    <Image
                  style={{
                    height: responsiveHeight(16),
                    borderRadius: responsiveHeight(2),
                    position:'relative'
                  }}
                  source={item.image}
                />

                    <View style={{ position:'absolute',backgroundColor:'rgba(255, 255, 255, 0.7)',
                    padding:5,borderRadius:10,alignItems:'center',justifyContent:'center',
                    paddingHorizontal:responsiveWidth(2),left:responsiveWidth(3),
                    top:responsiveHeight(1)}}>
                      <Text style={{fontSize:responsiveFontSize(1.8),color:'rgba(240, 99, 90, 1)',
                      fontWeight:'700',fontFamily: 'AirbnbCereal_W_Bd',}}>10
                      </Text>
                      <Text style={{fontSize:responsiveFontSize(1.2),color:'rgba(240, 99, 90, 1)',
                      fontFamily: 'AirbnbCereal_W_Md',fontWeight:'400'}}>JUNE</Text>
                    </View>

                    <TouchableOpacity style={{position:'absolute',backgroundColor:'rgba(255, 255, 255, 0.7)',
                    height:responsiveHeight(4),paddingHorizontal:responsiveWidth(2.4),
                    alignItems:'center',justifyContent:'center',borderRadius:responsiveHeight(1.1),
                    right:responsiveWidth(3),top:responsiveHeight(1)}}>
                    <Image 
                    style={{}}
                     source={require('../images/Group18129.png')}
                     />
                    </TouchableOpacity>
              
                    </TouchableOpacity>
             
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.4),
                    fontWeight: '500',
                    marginVertical: responsiveHeight(1),
                    alignSelf: 'center',
                    color: 'rgba(0, 0, 0, 1)',
                  }}>
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: responsiveHeight(1),
                    gap: 8,
                    alignItems:'center'
                  }}>
                  <Image source={require('../images/Group(2).png')} />
                  <Text style={{color: 'rgba(63, 56, 221, 1)',
                  fontFamily:'AirbnbCereal_W_Md',
                  fontSize:responsiveFontSize(1.4)}}>+20 Going</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: responsiveWidth(1),
                    marginBottom: responsiveHeight(1),
                  }}>
            <Image source={require('../images/Group33338.png')}
             style={{opacity:0.6}}  tintColor={'gray'}/>
           <Text style={{fontWeight: '400',opacity:0.9,fontFamily:'AirbnbCereal_W_Ld'}}
           >36 Guild Street London, UK
                  </Text>
                </View>
              </View>
            );
          }}
        />
}
       
  {/* -------------------------------- flat list end ------------------------- */}

        <View
          style={{
            backgroundColor: 'rgba(0, 248, 255, 0.16)',
            width: '95%',
            position: 'relative',
            borderRadius: 10,
            overflow: 'hidden',
            
          }}>
          <Image
            source={require('../images/77mLIhf8TW1.png')}
            style={{
              position: 'absolute',
              right: -1,
              height: responsiveHeight(22),
              width: responsiveWidth(50),
              resizeMode: 'cover',
            }}
          />
          <View
            style={{
              gap: responsiveHeight(1),
              justifyContent: 'center',
              marginLeft: responsiveWidth(7),
              marginVertical: responsiveHeight(2.4),
            }}>
            <Text
              style={{
                color: 'rgba(18, 13, 38, 1)',
                fontWeight: '500',
                fontSize: responsiveFontSize(2.5),
                fontFamily:'AirbnbCereal_W_Md'
              }}>Invite your friends
            </Text>
            <Text style={{color: 'rgba(72, 77, 112, 1)',fontFamily:'AirbnbCereal_W_Ld'}}>
              Get $20 for ticket
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(0, 248, 255, 1)',
                padding: responsiveHeight(1),
                width: responsiveWidth(20),
                alignItems: 'center',
                borderRadius: responsiveHeight(1),
              }}>
              <Text style={{color: 'white', 
              fontWeight: '600',fontFamily:'AirbnbCereal_W_Md'}}>INVITE</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* -------------------invited end---------------------------- */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: responsiveHeight(3.6),
            marginLeft: responsiveWidth(0.7),
          }}>
          <Text
            style={{
              color: 'rgba(18, 13, 38, 1)',
              fontSize: responsiveFontSize(2.4),
              //fontSize:18,
              fontWeight: '500',
              fontFamily:'AirbnbCereal_W_Md'
            }}>
            Nearby You
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 3,
              marginRight: responsiveWidth(5),
            }}>
            <Text>See All</Text>
            <Image source={require('../images/Vector1.png')} />
          </View>
         
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header_view: {
    width: '100%',
    height: responsiveHeight(23.8),
    borderRadius: 30,
    backgroundColor: 'rgba(74, 67, 236, 1)',
    paddingTop: responsiveHeight(4),
  },
  headerinner1: {
    marginVertical: responsiveHeight(3),
   
    width: '90%',
    alignSelf: 'center',
    height: responsiveHeight(12),
    justifyContent: 'space-between',
  },
  drower_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  search_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  verticleLine: {
    height: responsiveHeight(3),
    width: 1,
    backgroundColor: '#909090',
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
  main_view: {
    width: '100%',
    paddingLeft: responsiveWidth(6),
    marginTop: responsiveHeight(0),
  },
// modal style


});
