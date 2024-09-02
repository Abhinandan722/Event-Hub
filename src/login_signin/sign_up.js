import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Alert,Keyboard
  } from 'react-native';
  import React, { useState } from 'react';
  import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Sign_up = () => {
    const navigation=useNavigation()
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [conPassword,setConPassword]=useState('');
    const [badname,setBadName]=useState(false);
    const [bademail,setBadEmail]=useState(false);
    const [badpassword,setBadPassword]=useState(false);
    const [badconPassword,setBadConPassword]=useState(false);
    const [ispasshide1,setIspasshide1]=useState(true)
    const [ispasshide2,setIspasshide2]=useState(true)
    const [keyboardshow,setKeyboardshow]=useState(null);
    const [match,setMatch]=useState(false);
    const keyboardShowListener = Keyboard.addListener( 
      'keyboardDidShow', 
      () =>setKeyboardshow(true)
  
        
      
  ); 
  const keyboardHideListener = Keyboard.addListener( 
      'keyboardDidHide', 
      () =>setKeyboardshow(false)
      
  ); 
    
    const validation = () => {
      if (name === '') {
        setBadName(true);
      } else {
        setBadName(false);
        if (email === '') {
          setBadEmail(true);
        } else {
          setBadEmail(false);
          if (password === '') {
            setBadPassword(true);
          } else {
            setBadPassword(false);
            if (conPassword === '') {
              setMatch(false);
              setBadConPassword(true);
            } else {
              setBadConPassword(false);
              if (conPassword !== password) {
                setMatch(true);
              } else {
                setMatch(false);
                savedata();
              }
            }
          }
        }
      }
    };
      const savedata = async () => {
        await AsyncStorage.setItem('NAME', name);
          await AsyncStorage.setItem('EMAIL', email);
           await AsyncStorage.setItem('PASSWORD', password);
           Alert.alert("Sign up successful")
           navigation.navigate("verification")
      };

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
              <TouchableOpacity onPress={()=>navigation.navigate("sign_in")} style={{width:responsiveWidth(7)}} >
              <Image source={require('../images/Back.png')} />
              </TouchableOpacity>
            

              <Text style={styles.signname}>Sign up</Text>
              {/*--------------------------- input text----------------- */}
              <View style={[styles.inputview,{marginVertical:0,marginTop:responsiveHeight(2)}]}>
                <Image source={require('../images/Message.png')} />
                <TextInput 
                value={name}
                onChangeText={(text)=>setName(text)}
                style={{width: '80%'}} placeholder="Full name"
                  
                />
              </View>
              {
                badname?
                <Text style={{color:'red',marginHorizontal:responsiveWidth(4),marginTop:responsiveHeight(3)}}>Fill the input feild</Text>:null
              }
              

              <View style={styles.inputview}>
                <Image source={require('../images/Message.png')} />
                <TextInput 
                 value={email}
                 onChangeText={(text)=>setEmail(text)}
                style={{width: '80%'}} placeholder="abc@email.com" />
              </View>
              {
                bademail?
                <Text style={{color:'red',marginHorizontal:responsiveWidth(4),marginVertical:responsiveHeight(2)}}>Fill the email feild or correct email format </Text>:null
              }
    
              <View
                style={[
                  styles.inputview,
                  {marginVertical: 0, justifyContent: 'space-between'},
                ]}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: responsiveWidth(4),
                  }}>
                  <Image source={require('../images/Password.png')} />
                  <TextInput 
                    value={password}
                    secureTextEntry={ispasshide1}
                    onChangeText={(text)=>setPassword(text)}
                  style={{width: '80%'}} placeholder="Your password" />
                </View>

                {
                  ispasshide1? <TouchableOpacity  
                  onPress={()=>setIspasshide1(!ispasshide1)}
                  style={{alignSelf:'center',position:'absolute',right:responsiveWidth(3),
                   zIndex:10,
                  }}>
                 <Image  
                       style={{width:20,height:20,tintColor:'rgba(151, 151, 151, 1)',padding:responsiveWidth(3),}}
                      source={require('../images/hidde.png')} />
                 </TouchableOpacity>:

                  <TouchableOpacity  
                  onPress={()=>setIspasshide1(!ispasshide1)}
                  style={{alignSelf:'center',position:'absolute',right:responsiveWidth(3),
                   zIndex:10
                  }}>
                 <Image  
                       style={{width:20,height:20,tintColor:'rgba(151, 151, 151, 1)',padding:responsiveWidth(3),}}
                      source={require('../images/eye.png')} />
                 </TouchableOpacity>
                
                }
                
              </View>

              {
                badpassword?
                <Text style={{color:'red',marginHorizontal:responsiveWidth(4),marginTop:responsiveHeight(3)}}>Fill the input feild</Text>:null
              }
                
              <View
                style={[
                  styles.inputview,
                  { justifyContent: 'space-between',position:'relative'},
                ]}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: responsiveWidth(4),
                    
                  }}>
                  <Image source={require('../images/Password.png')} />
                  <TextInput 
                     secureTextEntry={ispasshide2}
                   value={conPassword}
                   onChangeText={(text)=>setConPassword(text)}
                  style={{width: '80%'}} placeholder="Confirm password" />
                </View>

                {
                  ispasshide2? <TouchableOpacity  
                  onPress={()=>setIspasshide2(!ispasshide2)}
                  style={{alignSelf:'center',position:'absolute',right:responsiveWidth(3),
                   zIndex:10,
                  }}>
                 <Image  
                       style={{width:20,height:20,tintColor:'rgba(151, 151, 151, 1)',padding:responsiveWidth(3),}}
                      source={require('../images/hidde.png')} />
                 </TouchableOpacity>:

                  <TouchableOpacity  
                  onPress={()=>setIspasshide2(!ispasshide2)}
                  style={{alignSelf:'center',position:'absolute',right:responsiveWidth(3),
                   zIndex:10
                  }}>
                 <Image  
                       style={{width:20,height:20,tintColor:'rgba(151, 151, 151, 1)',padding:responsiveWidth(3),}}
                      source={require('../images/eye.png')} />
                 </TouchableOpacity>
                
                }
              </View>
              {
                badconPassword?
                <Text style={{color:'red',marginHorizontal:responsiveWidth(4),marginTop:responsiveHeight(0.2)}}>Fill the input feild </Text>:null
              }

              {
                match?
                <Text style={{color:'red',marginHorizontal:responsiveWidth(4),marginTop:responsiveHeight(0.2)}}>password and conform password not match</Text>:null
              }


              {/*--------------------------- input text end----------------- */}
            
             
              <TouchableOpacity
               onPress={validation}
              style={styles.sign_btn}>
                <Text style={{color: 'white', fontSize: responsiveFontSize(2)
              ,   fontWeight: '400',
              fontFamily:'AirbnbCereal_W_Md'
              }}>SIGN UP
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
              {/*--------------------- last view start---------- */}
              <View
                style={{
                  justifyContent: 'center',
                  width: '100%',
                  alignItems: 'center',
                }}>
                <Text
                  style={{marginVertical: responsiveHeight(2), fontWeight: '500',   fontWeight: '400',
                  fontFamily:'AirbnbCereal_W_Md',
                  color:'rgba(157, 152, 152, 1)',
                  fontSize:responsiveFontSize(1.9)}}>
                  OR
                </Text>
                <TouchableOpacity style={styles.goggle_login_btn}>
                  <Image
                    style={{
                      width: responsiveWidth(6.9),
                      height: responsiveHeight(3.6),
                      resizeMode: 'contain',
                    }}
                    source={require('../images/superg.png')}
                  />
    
                  <Text
                    style={{
                      color: 'rgba(18, 13, 38, 1)',
                      fontSize: responsiveFontSize(2),
                      fontWeight: '400',
                      fontFamily:'AirbnbCereal_W_Bk'
                    }}>
                    Login with Google
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.goggle_login_btn,{marginVertical:responsiveHeight(3.1)}]}>
                  <Image
                    style={{
                      width: responsiveWidth(6.9),
                      height: responsiveHeight(3.6),
                      resizeMode: 'contain',
                    }}
                    source={require('../images/superf.png')}
                  />
    
                  <Text
                    style={{
                      color: 'rgba(18, 13, 38, 1)',
                      fontSize: responsiveFontSize(2),
                      fontWeight: '400',
                      fontFamily:'AirbnbCereal_W_Bk'
                    }}>Login with Facebook
                  </Text>
                </TouchableOpacity>
    
                <View style={{flexDirection:'row'}}>
            <Text 
            style={{color:'rgba(18, 13, 38, 1)',fontWeight:'400',fontFamily:'AirbnbCereal_W_Lk'}}
          >Already have an account? </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('sign_in')}>
        <Text 
            style={{color:'rgba(86, 105, 255, 1)',}}> Signin</Text>
        </TouchableOpacity>
         
         
            
            </View>
              </View>
    
              {/*--------------------- last view end---------- */}
    
            </View>
          </View>
            
      {
         keyboardshow?null: <Image
         style={styles.bottom_view}
         source={require('../images/Ellipse71.png')}
       />
      }
     

      {
        keyboardshow? null:<Image
        style={styles.right_view}
        source={require('../images/Ellipse70.png')}
      />
      }

      <Image
        style={styles.top_view}
        source={require('../images/Ellipse.png')}
      />
        </View>
      );
}

export default Sign_up

const styles = StyleSheet.create({
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
        fontSize: 24,
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
      
        paddingVertical: responsiveHeight(2),
        borderRadius: responsiveWidth(3),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginVertical: responsiveHeight(2),
        elevation:30,
        shadowColor:'rgba(111, 126, 201, 0.25)'
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
      bottom_view: {
        position: 'absolute',
        width: responsiveWidth(40),
        height: responsiveWidth(40),
        bottom: responsiveWidth(0),
      },
      right_view: {
        position: 'absolute',
        width: responsiveWidth(24),
        height: responsiveWidth(90),
        bottom: responsiveWidth(0),
        right: responsiveHeight(0),
       
     
      },
    
      top_view: {
        position: 'absolute',
        width: responsiveWidth(40),
        height: responsiveWidth(40),
        right: responsiveWidth(0),
      
      },
})