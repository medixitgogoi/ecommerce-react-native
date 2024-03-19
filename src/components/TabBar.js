import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/dist/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Animated, } from 'react-native';

const TabBar = () => {

    const [selected, setSelected] = useState(0);
    const navigation = useNavigation();

    const data = [
        {
            id: 0,
            name: "Home",
            iconName: "home"
        },
        {
            id: 1,
            name: "Cart",
            iconName: "cart"
        },
        {
            id: 2,
            name: "Orders",
            iconName: "receipt"
        },
        {
            id: 3,
            name: "Help",
            iconName: "help-circle"
        },
        {
            id: 4,
            name: "Profile",
            iconName: "user"
        },
    ]

    const handleTabPress = (name, index) => {
        navigation.navigate(name)
        // setSelected(index);
    }

    return (
        <View style={{ backgroundColor: "#212121", height: 63, borderTopRightRadius: 18, borderTopLeftRadius: 18, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, }}>

            {/* {selected == 0 ? (<Home />) : selected == 1 ? (<Cart />) : selected == 2 ? (<Orders />) : selected == 3 ? (<Help />) : selected == 4 ? (<Profile />) : ""} */}
            {/* <Animated.View style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: "red", position: "absolute", left: 14.5 }}>

            </Animated.View> */}

            {data.map((item, index) => (
                item.name === "Profile" ? (
                    <TouchableOpacity
                        key={item.id}
                        style={{
                            // backgroundColor: `${selected === item.id ? "red" : ""}`,
                            width: 40,
                            height: 40,
                            borderRadius: 50,
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                        onPress={() => handleTabPress(item.name, item.id)}
                    >
                        <Icon2
                            name={item.iconName}
                            style={{
                                color: '#797979',
                                fontSize: 20,
                                padding: 5,
                            }}
                        />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        key={item.id}
                        style={{
                            // backgroundColor: `${selected === item.id ? "red" : ""}`,
                            width: 40,
                            height: 40,
                            borderRadius: 50,
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                        onPress={() => handleTabPress(item.name, index)}
                    >
                        <Icon
                            name={item.iconName}
                            style={{
                                color: '#797979',
                                fontSize: 20,
                                padding: 5,
                            }}
                        />
                    </TouchableOpacity>
                )
            ))}

            {/* 
                <TouchableOpacity onPress={() => navigation.navigate(item.name)}>
                    <Icon3
                        name="cart"
                        style={{
                            color: '#797979',
                            fontSize: 20,
                            padding: 5,
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
                    <Icon3
                        name="receipt"
                        style={{
                            color: '#797979',
                            fontSize: 19,
                            padding: 5,
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Help")}>
                    <Icon4
                        name="support-agent"
                        style={{
                            color: '#797979',
                            fontSize: 19,
                            padding: 5,
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <Icon2
                        name="user"
                        style={{
                            color: '#797979',
                            fontSize: 19,
                            padding: 5,
                        }}
                    />
                </TouchableOpacity>
             */}
        </View>
    )
}

export default TabBar;

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        elevation: 5,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    activeTab: {
        backgroundColor: '#ddd',
    },
})


{/* <TouchableOpacity
                    key={item.id}
                    // style={[
                    //     styles.tab,
                    //     index === activeTab && styles.activeTab,
                    // ]}
                    onPress={() => handleTabPress(item.name, index)}
                >
                    <Icon
                        name={item.iconName}
                        style={{
                            color: '#797979',
                            fontSize: 20,
                            padding: 5,
                        }}
                    />
                </TouchableOpacity>
            ))} */}