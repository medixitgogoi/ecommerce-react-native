import { StyleSheet, } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import GuestStackNavigator from './GuestStackNavigator';
import AuthStackNavigator from './AuthStackNavigator';

const Stacknavigation = () => {

  const [tokendata, settokendata] = useState(null)
  
  const logindata = useSelector(state => state.user);
  // settokendata(logindata[0])
  console.log("logindata", logindata);
  console.log("tokendata&&tokendatatokendata&&tokendata", tokendata && tokendata)

  return (
    <NavigationContainer>
      {
        logindata[0]?.idToken ? <AuthStackNavigator /> : <GuestStackNavigator />
      }
    </NavigationContainer>
  )
}

export default Stacknavigation

const styles = StyleSheet.create({})