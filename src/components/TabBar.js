import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/dist/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

const TabBar = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('Home');

    // Update active tab based on current route
    navigation.addListener('state', (e) => {
        console.log("kkkkkk",e)
        const currentRoute = e.data.state.routes[e.data.state.index].name;
        setActiveTab(currentRoute);
    });

    const changeTab = (tabName) => {
        setActiveTab(tabName);
        navigation.navigate(tabName);
    };

    return (
        <View style={{ flex: 1 }}>

            <View
                style={{
                    width: "100%",
                    height: 50,
                    position: "absolute",
                    bottom: 0,
                    flexDirection: "row",
                }}>

                {/* home */}
                <TouchableOpacity
                    style={{
                        width: "20%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: activeTab === 'Home' ? "#F29D38" : "#000000", // Change color based on active state
                        borderTopStartRadius: 26,
                    }}
                    onPress={() => changeTab('Home')}
                >
                    <Icon name='home'
                        style={{ color: "#fff", fontSize: responsiveFontSize(2.5) }}
                    />
                    <Text style={{ fontSize: responsiveFontSize(1.70), color: "#fff" }}>HOME</Text>
                </TouchableOpacity>

                {/* Astrologer List */}
                <TouchableOpacity
                    style={{
                        width: "20%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: activeTab === 'Orders' ? "#F29D38" : "#000000",
                    }}
                    onPress={() => changeTab('Orders')}
                >
                    <Icon name='receipt'
                        style={{ color: "#fff", fontSize: responsiveFontSize(2) }}
                    />
                    <Text style={{ fontSize: responsiveFontSize(1.75), color: "#fff", paddingTop: 5 }}> Orders</Text>
                </TouchableOpacity>
                 
                {/* cart*/}
                <TouchableOpacity
                    style={{
                        width: "20%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: activeTab === 'Cart' ? "#F29D38" : "#000000",
                        
                        
                    }}
                    onPress={() => changeTab('Cart')}
                >
                    <Icon name='cart'
                        style={{ color: "#fff", fontSize: responsiveFontSize(2) }}
                    />
                    <Text style={{ fontSize: responsiveFontSize(1.75), color: "#fff", paddingTop: 5 }}> Cart</Text>
                </TouchableOpacity>

                 {/* Help */}
                <TouchableOpacity
                    style={{
                        width: "20%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: activeTab === 'Help' ? "#F29D38" : "#000000",
                    }}
                    onPress={() => changeTab('Help')}
                >
                    <Icon name='help-circle'
                        style={{ color: "#fff", fontSize: responsiveFontSize(2) }}
                    />
                    <Text style={{ fontSize: responsiveFontSize(1.75), color: "#fff", paddingTop: 5 }}> Help</Text>
                </TouchableOpacity>
                {/* profile */}
                <TouchableOpacity
                    style={{
                        width: "20%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: activeTab === 'Profile' ? "#F29D38" : "#000000",
                        borderTopEndRadius:21
                    }}
                    onPress={() => changeTab('Profile')}
                >
                    <Icon2 name='user'
                        style={{ color: "#fff", fontSize: responsiveFontSize(2) }}
                    />
                    <Text style={{ fontSize: responsiveFontSize(1.75), color: "#fff", paddingTop: 5 }}> Profile</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default TabBar;

const styles = StyleSheet.create({});


