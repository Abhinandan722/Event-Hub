import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,ActivityIndicator
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import {invited_friend} from '../../product';

import Share from 'react-native-share';
import { useNavigation } from '@react-navigation/native';
const Invite_friend = () => {
  const navigation=useNavigation()
  const [inputdata, setInputdata] = useState('');
  const [invite, setInvite] = useState([]);
  const [data, setData] = useState([
    false,  false, false, false,  false, false,   
    false, false,  false, false, false, false, false, false, false,
  ]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata=async()=>{
       try{
        setInvite(invited_friend);
         setLoading(false); 
       }catch(error){
         
       }}
   fetchdata()
 }, []);


  const share = () => {
    navigation.goBack();
    const selectedItems = invite.filter((item, index) => data[index]);

  // Create a message string containing the selected items
  const message = selectedItems.map(item => `${item.name}: ${item.followers}`).join('\n');

  // Share the message
  const options = {
    
    message: message,
    // Add any other options you want
  };
    Share.open(options)
    .then((res) => {
      console.log(res);
      
    })
    .catch((err) => {
      err && console.log(err);
    });
  }

const Onselect = (ind) => {
  const tempdata = data.map((item, index) => {
    if (index === ind) {
      return !item; // Toggle the value at the specified index
    } else {
      return item;
    }
  });

  setData(tempdata);
};

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
        <Text style={styles.filtertext}>Invite Friend</Text>
        <View style={styles.inputview}>
          <TextInput
            style={{fontSize: responsiveFontSize(2), width: '85%'}}
            value={inputdata}
            placeholder="Search"
            onChangeText={txt => {
              setInputdata(txt);
            }}
            placeholderTextColor={'rgba(129, 147, 174, 1)'}
          />
          <Image
            style={{alignSelf: 'center'}}
            source={require('../drawercomponent/drawerimages/search_6_.png')}
          />
        </View>

        <View style={{marginVertical: responsiveHeight(5)}}>
          {
            loading?<View style={{height:responsiveHeight(35),alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicator size='large' color="rgba(86, 105, 255, 1)" />
          </View>: <FlatList
            showsVerticalScrollIndicator={false}
            data={invite}
            style={{marginBottom: responsiveHeight(13.5)}}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: responsiveHeight(0.8),
                  }}>
                  <View
                    style={{flexDirection: 'row', gap: responsiveWidth(4.5)}}>
                    <Image source={item.image} />
                    <View style={{gap: responsiveHeight(0.3)}}>
                      <Text
                        style={{
                          color: 'rgba(18, 13, 38, 1)',
                          fontFamily: 'AirbnbCereal_W_Md',
                          fontSize: responsiveFontSize(2.2),
                        }}>
                        {item.name}
                      </Text>
                      <Text style={{fontFamily: 'AirbnbCereal_W_Bk'}}>
                        {item.followers}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                   onPress={()=>Onselect(index)}
                    style={{
                      backgroundColor:
                      data[index] 
                          ? 'rgba(86, 105, 255, 1)'
                          : 'rgba(226, 226, 226, 1)',
                      width: responsiveWidth(6),
                      height: responsiveWidth(6),
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: responsiveWidth(3),
                      alignSelf: 'center',
                    }}>
                    <Image
                      style={{resizeMode: 'contain', alignSelf: 'center'}}
                      source={require('../drawercomponent/drawerimages/right.png')}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
          }
         
        </View>

        <TouchableOpacity 
            onPress={share}
        style={styles.sign_btn}>
          <Text
            style={{
              color: 'white',
              fontSize: responsiveFontSize(2),
              fontWeight: '500',
              fontFamily: 'AirbnbCereal_W_Bk',
            }}>
            Invite
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
      </View>
    </View>
  );
};

export default Invite_friend;

const styles = StyleSheet.create({
  main_view: {
    width: '100%',
    height: '94%',
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 1,
    bottom: responsiveHeight(-3),
    borderRadius: responsiveHeight(6),
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(8), 
    borderTopRightRadius:responsiveHeight(6),
    borderBottomLeftRadius:responsiveHeight(0),
    borderBottomRightRadius:responsiveHeight(0),
  },
  linehorizontal: {
    width: responsiveWidth(8),
    height: responsiveWidth(1),
    backgroundColor: 'rgba(178, 178, 178, 0.5)',
    alignSelf: 'center',
    borderRadius: responsiveWidth(5),
  },
  filtertext: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: responsiveFontSize(3),
    fontFamily: 'AirbnbCereal_W_Md',
    marginVertical: responsiveHeight(2.5),
    fontWeight: '400',
  },
  inputview: {
    borderWidth: 1,
    borderColor: 'rgba(240, 240, 240, 1)',
    borderRadius: responsiveWidth(20),
    paddingHorizontal: responsiveHeight(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    position: 'absolute',
    bottom: responsiveHeight(4),
    zIndex: 1,
    shadowColor: 'rgba(111, 126, 201, 1)',
    elevation: 10,
  },
});
