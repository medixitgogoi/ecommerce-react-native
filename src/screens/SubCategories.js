import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView, StatusBar, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const SubCategories = ({ navigation, route }) => {

    const cat = route.params.data.name;
    const products = route.params.data.products;

    // console.log(route.params.data.products);
    // console.log(route);

    return (
        <SafeAreaView style={{ flex: 1, paddingBottom: 15 }}>
            <StatusBar
                animated={true}
                backgroundColor="#fff"
                barStyle="dark-content"
            />

            {/* header */}
            <View style={{ paddingVertical: 6, flexDirection: "row", alignItems: "center", paddingHorizontal: 15, backgroundColor: "#fff" }}>
                <TouchableOpacity style={{ backgroundColor: "#f6f6f6", padding: 5, borderRadius: 100, alignItems: "center", justifyContent: "center", elevation: 1, }} onPress={() => navigation.goBack()}>
                    <Icon name="keyboard-arrow-left" size={20} color="#000" />
                </TouchableOpacity>
                <Text style={{ color: "#000", textTransform: "uppercase", fontWeight: "700", fontSize: responsiveFontSize(2.2), marginLeft: 10 }}>{cat}</Text>
            </View>

            <ScrollView style={{ flex: 1, }}>
                <View style={{ marginVertical: 15, width: "100%", justifyContent: "center", flexDirection: "row" }}>
                    <Text style={{ color: "#000", textAlign: "center", fontSize: responsiveFontSize(2.4), marginHorizontal: 10, fontWeight: "500" }}>Please select your preferred category from {cat}</Text>
                </View>
                <View style={{ backgroundColor: "#f6f6f6", height: "100%", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", paddingTop: 10 }}>
                    {products.map(item => (
                        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", flexDirection: "column", marginBottom: 15, }} key={item.id} onPress={() => navigation.navigate("CategoryProducts", { data: item })}>
                            <View style={{ elevation: 3, width: 95, height: 95, borderRadius: 10, }}>
                                <Image source={{ uri: item.image }} style={{ height: "100%", width: "100%", borderRadius: 10, }} />
                            </View>
                            <Text style={{ color: "#000", fontWeight: "600", marginTop: 3 }}>{item.category}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default SubCategories

const styles = StyleSheet.create({})