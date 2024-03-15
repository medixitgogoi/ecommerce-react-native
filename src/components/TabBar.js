import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/dist/FontAwesome';
import Icon3 from 'react-native-vector-icons/dist/Ionicons';
import Icon4 from 'react-native-vector-icons/dist/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const TabBar = () => {

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
            iconName: "support-agent"
        },
        {
            id: 4,
            name: "Profile",
            iconName: "user"
        },
    ]

    const navigation = useNavigation();

    return (
        <View style={{ backgroundColor: "#212121", height: 63, borderTopRightRadius: 18, borderTopLeftRadius: 18, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, }}>

            {data.map((item) => (
                <TouchableOpacity onPress={() => navigation.navigate(item.name)}>
                    <Icon
                        name={item.iconName}
                        style={{
                            color: '#797979',
                            fontSize: 20,
                            // backgroundColor: "red",
                            padding: 5,
                        }}
                    />
                </TouchableOpacity>
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

export default TabBar

const styles = StyleSheet.create({})