import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
  Switch,
  Keyboard
} from 'react-native';
import React,{useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import ToggleSwitch from 'toggle-switch-react-native';


const Sign_in = () => {
  const navigation=useNavigation()
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [bademail, SetBadEmail] = useState(false);
  const [badpassword, SetBadPassword] = useState(false);
  const [ispasshide,setIspasshide]=useState(true)
  const [isEnabled, setIsEnabled] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [keyboardshow,setKeyboardshow]=useState(null);

  const keyboardShowListener = Keyboard.addListener( 
    'keyboardDidShow', 
    () =>setKeyboardshow(true)

      
    
); 
const keyboardHideListener = Keyboard.addListener( 
    'keyboardDidHide', 
    () =>setKeyboardshow(false)
    
); 


  const validation = () => {
    if (email=='') {
      SetBadEmail(true);
    } else {
      SetBadEmail(false);
      if (password=='') {
        SetBadPassword(true);
      }
       else {
        SetBadPassword(false);
        
           getdata();
          }
    }
  };
  const getdata = async () => {
    const memail = await AsyncStorage.getItem('EMAIL');
    const mpassword = await AsyncStorage.getItem('PASSWORD');
    if (memail == email && mpassword == password) {

      Alert.alert("sign in successful")
      // navigation.navigate('bottom_navigation')
      navigation.navigate('drawer')
      
      SetEmail('')
      SetPassword('')

     
    } else {
      Alert.alert('wrong email or password');
     
    }
    console.log(memail, mpassword, email, password);
  };
  return (
    <View style={{flex: 1,position:'relative'}}>
          <StatusBar
        backgroundColor={'transparent'}
        barStyle="dark-content"
        translucent={true}
      />
      <View style={styles.main_view}>
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            width: '100%',
            height: '100%',
            marginTop:responsiveHeight(6)
          }}>
          <View style={{alignSelf: 'center'}}>
            <Image
              style={styles.logoimg}
              source={require('../images/Group.png')}
            />
            <Text style={styles.logitext}>EventHub</Text>
          </View>
          <Text style={styles.signname}>Sign in</Text>
          {/*--------------------------- input text----------------- */}
          <View style={styles.inputview}>
            <Image 
             
            source={require('../images/Message.png')} />
            <TextInput
            value={email}
            onChangeText={(text)=>SetEmail(text)}
            style={{width: '80%'}} placeholder="abc@email.com" />
          </View>
          {
            bademail?<Text style={{color:'red',marginHorizontal:responsiveWidth(4),marginHorizontal:responsiveHeight(2),}}>Fill the email field</Text>:
            null
          }

          <View
            style={[
              styles.inputview,
              {marginVertical: 0, justifyContent: 'space-between',position:'relative'},
            ]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: responsiveWidth(4),
              }}>
              
           <Image source={require('../images/Password.png')} />
              <TextInput
              secureTextEntry={ispasshide}
               value={password}
               onChangeText={(text)=>SetPassword(text)}
               onSubmitEditing={Keyboard.dismiss} 
              style={{width: '80%'}} placeholder="Your password" />
            </View>
              {
                  ispasshide? <TouchableOpacity  
                  onPress={()=>setIspasshide(!ispasshide)}
                  style={{alignSelf:'center',position:'absolute',right:responsiveWidth(3),
                   zIndex:10,
                  }}>
                 <Image  
                       style={{width:20,height:20,tintColor:'rgba(151, 151, 151, 1)',padding:responsiveWidth(3),}}
                      source={require('../images/hidde.png')} />
                 </TouchableOpacity>:

                  <TouchableOpacity  
                  onPress={()=>setIspasshide(!ispasshide)}
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
            badpassword?<Text style={{color:'red',marginHorizontal:responsiveWidth(4),marginHorizontal:responsiveHeight(2),marginTop:responsiveHeight(3),}}>Fill the password Field</Text>:
            null
          }
          {/*--------------------------- input text----------------- */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                gap: responsiveWidth(2),
                marginVertical: responsiveHeight(2.5),
                alignItems:'center'
              }}>
 
            <ToggleSwitch

  isOn={rememberMe}
  onColor="rgba(86, 105, 255, 1)"
  offColor="rgba(86, 105, 255, 0.7)"
  labelStyle={{ color: "black", fontWeight: "900" }}
  size="small"
  onToggle={(isOn) => setRememberMe(isOn)}

/>
              <Text style={{color: 'rgba(18, 13, 38, 1)', fontWeight: '400',
               
               fontFamily:'AirbnbCereal_W_Bk'
            }}>
                Remember Me
              </Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('forgotpassword')}>
            <Text
              style={{
                color: 'rgba(18, 13, 38, 1)',
                padding: 1,
                fontWeight: '400',
                fontFamily:'AirbnbCereal_W_Bk'
              }}>Forgot Password?
            </Text>
            </TouchableOpacity>
          
          </View>

          <TouchableOpacity 
           onPress={validation}
         // onPress={()=>navigation.navigate('bottom_navigation')}
          // onPress={()=>navigation.navigate('drawer')}
          style={styles.sign_btn}>
            <Text style={{color: 'white', fontSize: responsiveFontSize(2)
          ,   fontWeight: '400',
          fontFamily:'AirbnbCereal_W_Md'
          }}>SIGN IN
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
            <TouchableOpacity
            
            style={styles.goggle_login_btn}>
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
            <TouchableOpacity
            style={[styles.goggle_login_btn,{marginVertical:responsiveHeight(3.1)}]}>
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
          >Don’t have an account?</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('sign_up')}>
        <Text 
            style={{color:'rgba(86, 105, 255, 1)',}}> Sign up</Text>
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
};

export default Sign_in;

const styles = StyleSheet.create({
  main_view: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: responsiveWidth(7.7),
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
    marginTop: responsiveHeight(4),
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
    // height: '7%',
    paddingVertical: responsiveHeight(2),
    borderRadius: responsiveWidth(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginVertical: responsiveHeight(2),
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
    height: responsiveWidth(80),
    bottom: responsiveWidth(0),
    right: responsiveHeight(0),
 
  },

  top_view: {
    position: 'absolute',
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    right: responsiveWidth(0),
  },
});
