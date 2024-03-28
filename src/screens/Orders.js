import { StyleSheet, Text, View, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import TabBar from '../components/TabBar';
import { useNavigation } from '@react-navigation/native';

const Orders = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: "#f6f6f6", paddingBottom: 63 }}>
            <StatusBar
                animated={true}
                backgroundColor="#fff"
                barStyle="dark-content"
            />

            {/* header */}
            <View style={{ flexDirection: "row", backgroundColor: "#fff", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, elevation: 2 }}>
                <View style={{ backgroundColor: "#fff", paddingVertical: 8, flexDirection: "row", alignItems: "center", }}>
                    <TouchableOpacity style={{ backgroundColor: "#f6f6f6", padding: 5, borderRadius: 100, alignItems: "center", justifyContent: "center", elevation: 1, marginRight: 6 }} onPress={() => navigation.goBack()}>
                        <Icon name="keyboard-arrow-left" size={20} color="#000" />
                    </TouchableOpacity>
                    <Text style={{ color: '#000', fontWeight: "600", fontSize: 16 }}>My Orders</Text>
                </View>
            </View>

            {/* Searchbar */}
            <View style={{ backgroundColor: "#fff", paddingBottom: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 100, paddingHorizontal: 7, marginHorizontal: 16, marginTop: 15, elevation: 5, marginBottom: 10 }}>

                    <View style={{ backgroundColor: "#e27e45", borderRadius: 100, alignItems: "center", justifyContent: "center", padding: 6, marginRight: 3, }}>
                        <Icon name="search" size={16} color="#fff" style={{}} />
                    </View>

                    <TextInput
                        placeholder="Search your order here"
                        placeholderTextColor="#aea79e"
                        style={{ flex: 1, fontSize: 16, color: '#000', paddingVertical: 6, fontWeight: "400", }}
                    />
                </View>
            </View>

            {/* Tabbar */}
            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
                <TabBar />
            </View>

        </View>
    )
}

export default Orders

const styles = StyleSheet.create({})