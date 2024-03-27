import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/dist/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { useSelector } from 'react-redux';

const TabBar = () => {

    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('Home');
    const cartProducts = useSelector(state => state.cart);

    navigation.addListener('state', (e) => {
        console.log("kkkkkk", e)
        const currentRoute = e.data.state.routes[e.data.state.index].name;
        setActiveTab(currentRoute);
    });

    const changeTab = (tabName) => {
        setActiveTab(tabName);
        navigation.navigate(tabName);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: "100%", height: 60, flexDirection: "row", backgroundColor: "#000", alignItems: "center", justifyContent: "space-evenly", borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>

                {/* home */}
                <TouchableOpacity
                    style={{
                        width: 50,
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: activeTab === 'Home' ? "#e27e45" : "#000000", 
                        borderRadius: 100
                    }}
                    onPress={() => changeTab('Home')}
                >
                    <Icon name='home'
                        style={{ color: "#fff", fontSize: responsiveFontSize(2.6) }}
                    />
                    <Text style={{ fontSize: responsiveFontSize(1.40), color: "#fff" }}>Home</Text>
                </TouchableOpacity>

                {/* categories */}
                <TouchableOpacity
                    style={{
                        width: 50,
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: activeTab === 'Categories' ? "#e27e45" : "#000000",
                        flexDirection: "column",
                        borderRadius: 100,
                        // padding: 2
                    }}
                    onPress={() => changeTab('Categories')}
                >
                    <Icon name='view-dashboard'
                        style={{ color: "#fff", fontSize: responsiveFontSize(2.6) }}
                    />
                    <Text style={{ fontSize: responsiveFontSize(1.4), color: "#fff" }}>Categories</Text>
                </TouchableOpacity>

                {/* cart*/}
                <TouchableOpacity
                    style={{
                        width: 50,
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: activeTab === 'Cart' ? "#e27e45" : "#000000",
                        borderRadius: 100
                    }}
                    onPress={() => changeTab('Cart')}
                >
                    <View>
                        <Icon name='cart'
                            style={{ color: "#fff", fontSize: responsiveFontSize(2.6) }}
                        />
                        <View style={{ backgroundColor: activeTab === 'Cart' ? "#fff" : "#e27e45", width: 15, height: 15, borderRadius: 100, justifyContent: "center", alignItems: "center", position: "absolute", top: -8, right: -8 }}>
                            <Text style={{ color: activeTab === 'Cart' ? "#e27e45" : "#fff", fontSize: 10, fontWeight: "600" }}>{cartProducts.length}</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: responsiveFontSize(1.4), color: "#fff", }}>Cart</Text>
                </TouchableOpacity>

                {/* Orders*/}
                <TouchableOpacity
                    style={{
                        width: 50,
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: activeTab === 'Orders' ? "#e27e45" : "#000000",
                        flexDirection: "column",
                        borderRadius: 100
                    }}
                    onPress={() => changeTab('Orders')}
                >
                    <Icon name='receipt'
                        style={{ color: "#fff", fontSize: responsiveFontSize(2.6) }}
                    />
                    <Text style={{ fontSize: responsiveFontSize(1.4), color: "#fff", }}>Orders</Text>
                </TouchableOpacity>

                {/* profile */}
                <TouchableOpacity
                    style={{
                        width: 50,
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: activeTab === 'Profile' ? "#e27e45" : "#000000",
                        borderRadius: 100
                    }}
                    onPress={() => changeTab('Profile')}
                >
                    <Icon2 name='user'
                        style={{ color: "#fff", fontSize: responsiveFontSize(2.6) }}
                    />
                    <Text style={{ fontSize: responsiveFontSize(1.4), color: "#fff", paddingTop: 5 }}>Profile</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default TabBar;

const styles = StyleSheet.create({});