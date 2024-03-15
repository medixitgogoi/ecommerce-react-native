import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GuestStackNavigator from './GuestStackNavigator';
import AuthStackNavigator from './AuthStackNavigator';
const Stacknavigation = () => {
    const[tokendata,settokendata]=useState(null)
    // useEffect(() => {
    //     // Retrieve the value from AsyncStorage
    //     const fetchAsyncStorageValue = async () => {
    //         try {
    //             const mr = await AsyncStorage.getItem('userData');
    //             console.log('mr:', mr);
    //             if (mr !== null) {
    //                 const modifiedUser = JSON.parse(mr);
    //                 console.log('modifiedUser:', modifiedUser);
    
    //                 if (modifiedUser) {
    //                     settokendata(modifiedUser); 
    //                     // setstoragee(modifiedUser.user_type);
    //                     console.log('User type:', modifiedUser);
    //                 } else {
    //                     console.log('No user type found in modifiedUser');
    //                 }
    //             } else {
    //                 console.log('No user data found in AsyncStorage');
    //             }
    //         } catch (error) {
    //             console.error('Error retrieving AsyncStorage value:', error);
    //         }
    //     };
    
    //     fetchAsyncStorageValue();
    // }, []);
    const logindata = useSelector(state => state.user);
    // settokendata(logindata[0])
    console.log("logindata",logindata);
    console.log("tokendata&&tokendatatokendata&&tokendata",tokendata && tokendata)
  return (
    <NavigationContainer>
        {
          logindata[0]?.idToken? <AuthStackNavigator/> : <GuestStackNavigator/> 
        }

    </NavigationContainer>
  )
}

export default Stacknavigation

const styles = StyleSheet.create({})