import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {events, review} from '../../product';
const Org_pf_about = () => {
  const navigation = useNavigation();
  const [clickevent, setClickevent] = useState(1);
  const [eventdata, setEventdata] = useState([]);
  const [reviewdata, setReviewdata] = useState([]);
  useEffect(() => {
    setEventdata(events);
    setReviewdata(review)
  }, []);

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        padding: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(6),
      }}>
      <StatusBar backgroundColor={'transparent'} barStyle="dark-content" />
      <View style={styles.header_view}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: responsiveWidth(5),
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{tintColor: 'rgba(18, 13, 38, 1)'}}
              source={require('../drawercomponent/drawerimages/arrow-left.png')}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image
            style={{tintColor: 'rgba(18, 13, 38, 1)'}}
            source={require('../drawercomponent/drawerimages/more-vertical.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.main_profile_view}>
        <Image
          style={{
            width: responsiveWidth(26),
            height: responsiveWidth(26),
            borderRadius: responsiveWidth(13),
            marginVertical: responsiveHeight(1),
            alignSelf: 'center',
          }}
          source={require('../drawercomponent/drawerimages/image89.png')}
        />
        <Text
          style={{
            color: 'rgba(18, 13, 38, 1)',
            fontSize: responsiveFontSize(3.3),
            fontFamily: 'AirbnbCereal_W_Md',
            marginVertical: responsiveHeight(1),
          }}>
          Ashfak Sayem
        </Text>
        <View style={styles.main_follower_view}>
          <View style={styles.following}>
            <Text
              style={{
                color: 'rgba(18, 13, 38, 1)',
                fontWeight: '500',
                fontFamily: 'AirbnbCereal_W_Md',
                fontSize: responsiveFontSize(2),
              }}>
              350
            </Text>
            <Text style={{color: 'rgba(116, 118, 136, 1)'}}>Following</Text>
          </View>
          <View style={styles.verticleLine}></View>
          <View style={styles.followers}>
            <Text
              style={{
                color: 'rgba(18, 13, 38, 1)',
                fontWeight: '500',
                fontFamily: 'AirbnbCereal_W_Md',
                fontSize: responsiveFontSize(2),
              }}>
              346
            </Text>
            <Text style={{color: 'rgba(116, 118, 136, 1)'}}>Following</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', gap: responsiveWidth(6)}}>
        <TouchableOpacity
          style={[styles.editbtn, {backgroundColor: 'rgba(86, 105, 255, 1)'}]}>
          <Image
            style={{tintColor: 'white'}}
            source={require('../drawercomponent/drawerimages/user-plus.png')}
          />
          <Text style={[styles.editText, {color: 'white'}]}>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editbtn}>
          <Image
            source={require('../drawercomponent/drawerimages/Group18535.png')}
          />
          <Text style={styles.editText}>Massages</Text>
        </TouchableOpacity>
      </View>
      {/* -------------------------------------------------------------------- */}
      <View
        style={{
          width: '97%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: responsiveHeight(3),
        }}>
        <TouchableOpacity onPress={() => setClickevent(1)} style={{}}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.4),
              fontFamily:clickevent==1?'AirbnbCereal_W_Md' : 'AirbnbCereal_W_Bk',
              color:
                clickevent == 1
                  ? 'rgba(86, 105, 255, 1)'
                  : 'rgba(116, 118, 136, 1)',
            }}>ABOUT
          </Text>
          {clickevent == 1 ? <View style={styles.horizontal}></View> : null}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setClickevent(2)}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.4),
              fontFamily:clickevent==2?'AirbnbCereal_W_Md' : 'AirbnbCereal_W_Bk',
              color:
                clickevent == 2
                  ? 'rgba(86, 105, 255, 1)'
                  : 'rgba(116, 118, 136, 1)',
            }}>EVENT
          </Text>
          {clickevent == 2 ? <View style={styles.horizontal}></View> : null}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setClickevent(3)}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.4),
              fontFamily:clickevent==3?'AirbnbCereal_W_Md' : 'AirbnbCereal_W_Bk',
              color:
                clickevent == 3
                  ? 'rgba(86, 105, 255, 1)'
                  : 'rgba(116, 118, 136, 1)',
            }}>REVIEWS
          </Text>
          {clickevent == 3 ? <View style={styles.horizontal}></View> : null}
        </TouchableOpacity>
      </View>
      {/* -------------------------------------------------------------------- */}
      <View
        style={{marginTop: responsiveHeight(1), width: responsiveWidth(88)}}>
        {clickevent == 1 ? (
          <Text
            style={{
              fontFamily: 'AirbnbCereal_W_Bk',
              color: 'rgba(18, 13, 38, 0.8)',
              lineHeight: responsiveHeight(3.1),
              fontSize: responsiveFontSize(2),
            }}>
            Enjoy your favorite dishe and a lovely your friends and family and
            have a great time. Food from local food trucks will be available for
            purchase.
            <Text
              style={{
                color: 'rgba(86, 105, 255, 1)',
                fontSize: responsiveFontSize(2.2),
              }}>
              Read More{' '}
            </Text>
          </Text>
        ) : null}

        {/* ----------------------about complete */}
      </View>
      {clickevent == 2 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={eventdata}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.flatitem_view}>
                <Image
                  style={{
                    width: responsiveWidth(20),
                    height: responsiveWidth(20),
                    borderRadius: responsiveWidth(3.5),
                    resizeMode: 'contain',
                  }}
                  source={item.image}
                />
                <View style={{gap: responsiveHeight(0.5), alignSelf: 'center'}}>
                  <Text style={styles.date}>{item.date} </Text>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      ) : null}

      {/* ------------------last --------------------------- */}
      {clickevent == 3 ? (
        <FlatList
      
          showsVerticalScrollIndicator={false}
          data={reviewdata}
          renderItem={({item}) => {
            return (
            <View style={ styles.flatitem_review}>
              <View style={styles.flatitem_topview}>
                <View style={{flexDirection:'row',gap:responsiveWidth(4)}}>
                <Image
                source={item.image}
                />
                <View>
                  <Text 
                   style={styles.review_name}
                  >{item.name}</Text>
                  <View style={{flexDirection:'row'}}>
                  <Image
                  style={{marginVertical:responsiveHeight(0.5)}}
                source={item.star}
                />
                 <Image
                  style={{marginVertical:responsiveHeight(0.5)}}
                source={item.star}
                />
                 <Image
                  style={{marginVertical:responsiveHeight(0.5)}}
                source={item.star}
                />
                 <Image
                  style={{marginVertical:responsiveHeight(0.5)}}
                source={item.star}
                />
                  </View>
                
            
                </View>
                </View>
                
                <Text 
                   style={styles.review_date}
                >{item.date}</Text>

              </View>
              <Text
              style={styles.description}
              >{item.description}

              </Text>
            </View>
            );
          }}
        />
      ) : null}

    </View>
  );
};

export default Org_pf_about;

const styles = StyleSheet.create({
  header_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(7),
  },
  main_profile_view: {
    marginVertical: responsiveHeight(2),
    marginBottom: responsiveHeight(0),

    alignSelf: 'center',
  },
  verticleLine: {
    height: responsiveHeight(5),
    width: 1,
    backgroundColor: 'rgba(221, 221, 221, 1)',
    alignSelf: 'center',
  },
  main_follower_view: {
    flexDirection: 'row',
    gap: responsiveWidth(5),
    alignItems: 'center',
    marginVertical: responsiveHeight(2),
  },
  following: {
    gap: responsiveHeight(1.2),
    alignItems: 'center',
  },
  followers: {
    gap: responsiveHeight(1.2),
    alignItems: 'center',
  },
  editbtn: {
    width: responsiveWidth(40),
    borderWidth: 1,
    borderColor: 'rgba(86, 105, 255, 1)',
    padding: responsiveWidth(2.8),
    alignItems: 'center',
    gap: responsiveWidth(4),
    borderRadius: responsiveWidth(2),
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: responsiveHeight(2),
    alignSelf: 'center',
  },
  editText: {
    color: 'rgba(86, 105, 255, 1)',
    fontFamily: 'AirbnbCereal_W_Bld',
  },
  horizontal: {
    marginTop: responsiveHeight(1),
    width: '100%',
    height: responsiveHeight(0.5),
    backgroundColor: 'rgba(86, 105, 255, 1)',
    alignSelf: 'center',
    borderRadius: responsiveWidth(100),
  },
  flatitem_view: {
    flexDirection: 'row',
    marginBottom: responsiveHeight(2),
    padding: responsiveHeight(1.2),
    borderRadius: responsiveHeight(2),
    gap: responsiveWidth(5),
    shadowColor: 'rgba(83, 89, 144, 0.07)',
    elevation: 20,
    borderWidth: 1,
    borderColor: 'rgba(83, 89, 144, 0.07)',
    backgroundColor: 'white',
  },
  date: {
    color: 'rgba(86, 105, 255, 1)',
    fontFamily: 'AirbnbCereal_W_Md',
    fontSize: responsiveFontSize(1.4),
  },
  name: {
    color: 'rgba(18, 13, 38, 1)',
    fontSize: responsiveFontSize(2.1),
    fontFamily: 'AirbnbCereal_W_Md',
    width: responsiveWidth(50),
    lineHeight: responsiveHeight(3),
  },
  flatitem_review:{
    marginBottom:responsiveHeight(2.5)
    

  }
  ,flatitem_topview:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  description:{
    color:'rgba(0, 0, 0, 1)',
    paddingHorizontal:responsiveWidth(5),
    marginLeft:responsiveWidth(8),
    fontFamily: 'AirbnbCereal_W_Blt',
    lineHeight:responsiveHeight(3),
    fontSize:responsiveFontSize(1.9)
  },
  review_name:{
    color:'rgba(0, 0, 0, 1)',
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'AirbnbCereal_W_Md',

  },
  review_date:{
    color:'rgba(173, 175, 187, 1)',
    fontFamily: 'AirbnbCereal_W_Blt',
    

  }
});
