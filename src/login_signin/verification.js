import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Alert,
  } from 'react-native';
  import React, { useState,useEffect } from 'react';
  import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Verification = () => {
  const [timer, setTimer] = useState(20);
    const [isactive,setIsactive]=useState(0);
    const navigation=useNavigation()
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [conPassword,setConPassword]=useState('');
    const [badname,setBadName]=useState(false);
    const [bademail,setBadEmail]=useState(false);
    const [badpassword,setBadPassword]=useState(false);
    const [badconPassword,setBadConPassword]=useState(false)
    const handlereset =async()=>{
        await AsyncStorage.setItem('onboarded','0')

    }
    const validation = () => {

        if(name==''){
            setBadName(true)
        }
        else{
            setBadName(false)
            if(email==''){
                setBadEmail(true)
    
            } else{
                setBadEmail(false)
                if(password==''){
                    setBadPassword(true)
        
                } else{
                    setBadPassword(false)
                    if(conPassword==''){
                        setBadConPassword(true)
    
                    }
                    else{
                        setBadConPassword(false)
                     Alert.alert("verification success")
                     navigation.navigate("sign_in")
                    }}}}}

                    useEffect(() => {
                      const interval = setInterval(() => {
                        if (timer > 0) {
                          setTimer(timer - 1);
                        }
                      }, 1000);
                      if(timer==0){
                        navigation.navigate('sign_up')
                      }
                  
                      return () => clearInterval(interval);
                    }, [timer]);
                  
 
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
              <TouchableOpacity onPress={()=>navigation.navigate("sign_up")}  style={{width:responsiveWidth(7)}}>
              <Image source={require('../images/Back.png')} />
              </TouchableOpacity>
            

              <Text style={styles.signname}>Verification</Text>
              <Text style={styles.codeveriLabel} 
               className=" w-2/3 leading-6" 
              >We’ve send you the verification code on +1 2620 0323 7631
              </Text>
              {/*--------------------------- input text----------------- */}
             
                  <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between'}}>

                  <View style={[styles.inputview,{borderColor:isactive==1?"rgba(86, 105, 255, 1)":"'rgba(228, 223, 223, 1)'"}]}>
             
             <TextInput 
             value={name}
             onChangeText={(text)=>setName(text)}
             keyboardType={'phone-pad'}
               onPressIn={()=>setIsactive(1)}
             style={{width: '100%',fontSize:20,color:'rgba(18, 13, 38, 1)',fontWeight:'400',
                      fontFamily:'AirbnbCereal_W_Bd'}} 
              placeholderTextColor="rgba(218, 218, 218, 1)"
             placeholder="  _" />
           </View>
           <View style={[styles.inputview,{borderColor:isactive==2?"rgba(86, 105, 255, 1)":"'rgba(228, 223, 223, 1)'"}]}>
             
           <TextInput
             value={email}
             keyboardType={'phone-pad'}
             onChangeText={(text)=>setEmail(text)}
            onPressIn={()=>setIsactive(2)}
           style={{width: '100%',fontSize:20,color:'rgba(18, 13, 38, 1)',fontWeight:'400',
                      fontFamily:'AirbnbCereal_W_Bd'}} 
              placeholderTextColor="rgba(218, 218, 218, 1)"
             placeholder="  _" />
           </View>
           <View style={[styles.inputview,{borderColor:isactive==3?"rgba(86, 105, 255, 1)":"'rgba(228, 223, 223, 1)'"}]}>
             
           <TextInput
            keyboardType={'phone-pad'}
           value={password}
           onChangeText={(text)=>setPassword(text)}
            onPressIn={()=>setIsactive(3)}
           style={{width: '100%', fontSize:20,color:'rgba(18, 13, 38, 1)',fontWeight:'400',
                      fontFamily:'AirbnbCereal_W_Bd'}} 
              placeholderTextColor="rgba(218, 218, 218, 1)"
             placeholder="  _" />
           </View>
           <View style={[styles.inputview,{borderColor:isactive==4?"rgba(86, 105, 255, 1)":"'rgba(228, 223, 223, 1)'"}]}>
             
           <TextInput
            keyboardType={'phone-pad'}
           value={conPassword}
           onChangeText={(text)=>setConPassword(text)}
            onPressIn={()=>setIsactive(4)}
           style={{width: '100%',fontSize:20,color:'rgba(18, 13, 38, 1)',fontWeight:'400',
                      fontFamily:'AirbnbCereal_W_Bd'}} 
              placeholderTextColor="rgba(218, 218, 218, 1)"
             placeholder="  _" />
           </View>

                  </View>
             
    
     
                
             

              {/*--------------------------- input text end----------------- */}
            
             
              <TouchableOpacity  
                onPress={validation}
               style={styles.sign_btn}>
                <Text style={{color: 'white', fontSize: responsiveFontSize(2.3)
              ,   fontWeight: '400',
              fontFamily:'AirbnbCereal_W_Md'
              }}>CONTINUE
                </Text>
                <Image
                  style={{
                    //width:25,
                    //height:25,
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
              <Text style={{color:'rgba(18, 13, 38, 1)',fontWeight:'400',fontFamily:'AirbnbCereal_W_Lk',marginVertical:responsiveHeight(1.5)}}
               
              >Re-send code in<Text  onPress={()=>navigation.navigate('sign_in')}
                style={{color:'rgba(86, 105, 255, 1)'}}
                > {timer > 9 ? ` ${timer}` : ` 0${timer}`}
                  
                  </Text></Text>
              </View>
              {/* <TouchableOpacity 
               style={{backgroundColor:'red'}}
              onPress={handlereset}
               >
                <Text>reset</Text>
              </TouchableOpacity> */}
    
              {/*--------------------- last view end---------- */}
    
            </View>
          </View>
        </View>
      );
}

export default Verification

const styles = StyleSheet.create({
    codeveriLabel:{
        width:'70%',
        color:'rgba(18, 13, 38, 1)',
      //  lineHeight:responsiveHeight(3.2),
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
       
        fontSize:responsiveFontSize(3),
        fontWeight: '400',
        color: 'rgba(18, 13, 38, 1)',
        fontFamily: 'AirbnbCereal_W_Md',
        marginTop: responsiveHeight(2.5),
        marginBottom:responsiveHeight(1),
      },
      inputview: {
        
        borderWidth: 1,
        borderColor: 'rgba(228, 223, 223, 1)',
        borderRadius: 10,
        
         paddingLeft: responsiveWidth(1.5),
        
        marginVertical: responsiveHeight(3),
         width: '16%',
                 
      },
      sign_btn: {
        backgroundColor: 'rgba(86, 105, 255, 1)',
        width: '80%',
        alignSelf: 'center',
        // height: '8%',
        paddingVertical: responsiveHeight(2.5),
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
})