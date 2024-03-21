import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView, StatusBar, TextInput } from 'react-native';
import data from "../data/categoryProductLists";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const CategoryProducts = ({ navigation, route }) => {

    const cat = route.params.data.name;

    return (
        <SafeAreaView style={{ flex: 1, paddingBottom: 44 }}>
            <StatusBar
                animated={true}
                backgroundColor="#fff"
                barStyle="dark-content"
            />

            {/* header */}
            <View style={{ paddingTop: 6, flexDirection: "row", alignItems: "center", paddingHorizontal: 15, backgroundColor: "#fff" }}>
                <TouchableOpacity style={{ backgroundColor: "#f6f6f6", padding: 5, borderRadius: 100, alignItems: "center", justifyContent: "center", elevation: 1, }} onPress={() => navigation.goBack()}>
                    <Icon name="keyboard-arrow-left" size={20} color="#000" />
                </TouchableOpacity>
                <Text style={{ color: "#000", textTransform: "uppercase", fontWeight: "800", fontSize: responsiveFontSize(2.2), marginLeft: 10 }}>{cat} categories</Text>
            </View>

            {/* Searchbar */}
            <View style={{ backgroundColor: "#fff", paddingBottom: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 100, paddingHorizontal: 7, marginHorizontal: 16, marginTop: 15, elevation: 5, marginBottom: 10 }}>

                    <View style={{ backgroundColor: "#e27e45", borderRadius: 100, alignItems: "center", justifyContent: "center", padding: 6, marginRight: 3, }}>
                        <Icon name="search" size={16} color="#fff" style={{}} />
                    </View>

                    <TextInput
                        placeholder="Search for categories"
                        placeholderTextColor="#aea79e"
                        style={{ flex: 1, fontSize: 16, color: '#000', paddingVertical: 6, fontWeight: "400", }}
                    />
                </View>
            </View>

            <ScrollView style={{ flex: 1, paddingBottom: 44 }}>
                <View style={{ backgroundColor: "#f6f6f6", height: "100%", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", paddingTop: 10 }}>
                    {data.map(item => (
                        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", flexDirection: "column", marginBottom: 15, }}>
                            <Image source={{ uri: item.image }} style={{ width: 95, height: 95, borderRadius: 10 }} />
                            <Text style={{ color: "#000", fontWeight: "600", marginTop: 3 }}>{item.category}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default CategoryProducts

const styles = StyleSheet.create({})