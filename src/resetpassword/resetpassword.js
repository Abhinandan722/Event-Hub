import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Alert,
    Switch
  } from 'react-native';
  import React, { useState } from 'react';
  import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Resetpassword = () => {

    const navigation=useNavigation()
    const[email,setEmail]=useState('');
    const [bademail, SetBadEmail] = useState(false);
    const validation = () => {
        if (email=='') {
          SetBadEmail(true);
        } else {
          SetBadEmail(false);
          Alert.alert("success")
          } };

    return (
        <View style={{flex: 1}}>
          <View style={styles.main_view}>
            <View
              style={{
                backgroundColor: 'rgba(255, 255, 255, 1)',
                width: '100%',
                height: '100%',
                marginTop:responsiveHeight(6)
              }}>
              <TouchableOpacity onPress={()=>navigation.navigate("sign_in")}  style={{width:responsiveWidth(7)}}>
              <Image source={require('../images/Back.png')} />
              </TouchableOpacity>
            

              <Text style={styles.signname}>Resset Password</Text>
              <Text style={styles.codeveriLabel} 
                
              >Please enter your email address to request a password reset
              </Text>
              {/*--------------------------- input text----------------- */}
             
              <View style={styles.inputview}>
                <Image source={require('../images/Message.png')} />
                <TextInput 
                 value={email}
                 onChangeText={(text)=>setEmail(text)}
                style={{width: '80%'}} placeholder="abc@email.com" />
              </View>
              {
            bademail?<Text style={{color:'red',marginHorizontal:responsiveWidth(4),marginHorizontal:responsiveHeight(2),}}>Fill the email field</Text>:
            null
          }
    
     
                
             

              {/*--------------------------- input text end----------------- */}
            
             
              <TouchableOpacity  
                 onPress={validation}
               style={styles.sign_btn}>
                <Text style={{color: 'white', fontSize: responsiveFontSize(2.3)
              ,   fontWeight: '400',
              fontFamily:'AirbnbCereal_W_Md'
              }}>SEND
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
          </View>
          <Image
        style={styles.top_view}
        source={require('../images/Ellipse.png')}
      />
        </View>
      );
}

export default Resetpassword
const styles = StyleSheet.create({
    codeveriLabel:{
        width:'80%',
        color:'rgba(18, 13, 38, 1)',
       lineHeight:responsiveHeight(3.2),
        paddingVertical:responsiveHeight(1)

    },
    main_view: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding: responsiveWidth(7.7),
        paddingTop:responsiveWidth(4)
      },
      logoimg: {
        width: responsiveHeight(8),
        resizeMode: 'contain',
        height: responsiveHeight(8),
        alignSelf: 'center',
      },
      logitext: {
        color: 'rgba(55, 54, 74, 1)',
    
        fontSize: responsiveFontSize(4.4),
        fontWeight: '400',
        fontFamily: 'AirbnbCereal_W_Md',
      },
      signname: {
        //fontSize: 24,
        fontSize:responsiveFontSize(3),
        fontWeight: '400',
        color: 'rgba(18, 13, 38, 1)',
        fontFamily: 'AirbnbCereal_W_Md',
        marginTop: responsiveHeight(2.5),
        marginBottom:responsiveHeight(1),
      },
    
      inputview: {
        padding: 1,
        borderWidth: 1,
        borderColor: 'rgba(228, 223, 223, 1)',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: responsiveWidth(5),
        gap: responsiveWidth(4),
        marginVertical: responsiveHeight(3),
        width: '100%',
      },
      sign_btn: {
        backgroundColor: 'rgba(86, 105, 255, 1)',
        width: '80%',
        alignSelf: 'center',
       
        paddingVertical: responsiveHeight(1.9),
        borderRadius: responsiveWidth(3),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginVertical: responsiveHeight(3),
        elevation:30,
        shadowColor:'rgba(111, 126, 201, 0.25)',
      
      },
      goggle_login_btn: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        elevation: 10,
        shadowColor: 'rgba(211, 212, 226, 0.25)',
    
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: responsiveHeight(1.6),
        gap: responsiveWidth(5),
        width: '80%',
        alignSelf: 'center',
        borderRadius: responsiveWidth(3),
        borderWidth: 1,
        borderColor: 'rgba(211, 212, 226, 0.25)',
      },
      top_view: {
        position: 'absolute',
        width: responsiveWidth(60),
        height: responsiveWidth(40),
        right: responsiveWidth(0),
      },
})