import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from './src/welcome/welcome'
import Onboarding_one from './src/onboarding/onboarding_one'
import 'react-native-gesture-handler';

import Sign_in from './src/login_signin/sign_in'
import Sign_up from './src/login_signin/sign_up'
import Verification from './src/login_signin/verification'
import Resetpassword from './src/resetpassword/resetpassword'
import Home from './src/home_screens/home'
import Bottom_navigation from './src/home_screens/bottom_navigation'
import Drawerscreen from './src/home_screens/drawercomponent/drawerscreen'
import Eventdetial from './src/home_screens/eventdetial/eventdetial'
import Search from './src/home_screens/search_scr/search'
import Allevents from './src/home_screens/allevents/allevents'
import Filterscr from './src/home_screens/filterscr/filterscr'
import Org_pf_about from './src/home_screens/organizer/org_pf_about'
import Notification from './src/home_screens/notifications/notification'
import Invite_friend from './src/home_screens/eventdetial/Modal'
const App = () => {
   const stack=createNativeStackNavigator();
  return (
    <View style={{flex:1}}>
      <NavigationContainer>
<stack.Navigator 
 screenOptions={{
  headerShown:false
 }}
>
  <stack.Screen name='welcome'         component={Welcome}/>
  <stack.Screen name='sign_in'         component={Sign_in}/>
  <stack.Screen name='sign_up'         component={Sign_up}/>
  <stack.Screen name='verification'    component={Verification}/>
  <stack.Screen name='boarding_one'    component={Onboarding_one}/>
  <stack.Screen name='forgotpassword'  component={Resetpassword}/>
  <stack.Screen name='home'            component={Home}/>
  
  <stack.Screen name='drawer' component={Drawerscreen}/>
  <stack.Screen name='eventdetial' component={Eventdetial}/>
  <stack.Screen name='search' component={Search}/>
  <stack.Screen name='allevents' component={Allevents}/>
  <stack.Screen name='filterscr' component={Filterscr}/>
  <stack.Screen name='org_pf_about' component={Org_pf_about}/>
  <stack.Screen name='notification' component={Notification}/>
  <stack.Screen name='invite_friend' component={Invite_friend}/>

</stack.Navigator>
      </NavigationContainer>
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({})