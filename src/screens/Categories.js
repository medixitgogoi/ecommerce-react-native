import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import categories from '../data/categoriesLists';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import TabBar from '../components/TabBar';

const Categories = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, paddingBottom: 44 }}>
            <StatusBar
                animated={true}
                backgroundColor="#fff"
                barStyle="dark-content"
            />
            <View style={{ height: "100%", backgroundColor: "#fff" }}>

                {/* header */}
                <View style={{ paddingTop: 6, flexDirection: "row", alignItems: "center", paddingHorizontal: 15, backgroundColor: "#fff" }}>
                    <TouchableOpacity style={{ backgroundColor: "#f6f6f6", padding: 5, borderRadius: 100, alignItems: "center", justifyContent: "center", elevation: 1, }} onPress={() => navigation.goBack()}>
                        <Icon name="keyboard-arrow-left" size={20} color="#000" />
                    </TouchableOpacity>
                    <Text style={{ color: "#000", textTransform: "uppercase", fontWeight: "800", fontSize: responsiveFontSize(2.2), marginLeft: 10 }}>Categories</Text>
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

                {/* Categories */}
                <ScrollView>
                    <View style={{
                        backgroundColor: "#f6f6f6",
                        height: "100%",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                        paddingTop: 15
                    }}>
                        {categories.map((item) => {
                            {/* console.log("Dixitncnccj", item) */}
                            return (
                                <View style={{
                                    backgroundColor: "#f6f6f6",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    marginBottom: 15,
                                }} onPress={() => navigation.navigate('SubCategories', { data: item })} key={item.id}>
                                    <TouchableOpacity 
                                     onPress={() => navigation.navigate('SubCategories', { data: item })}
                                     key={item.id}
                                    style={{ width: 95, height: 95, borderRadius: 10, elevation: 3  }}>
                                        <Image source={{ uri: item.image }} 
                                        style={{
                                            height: "100%", width: "100%", borderRadius: 10, backgroundColor: "#fff", }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                    onPress={() => navigation.navigate('SubCategories', { data: item })} key={item.id}
                                    >
                                    <Text style={{ color: "#000", fontWeight: "600", marginTop: 3 }}>{item.name}</Text>

                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>

            </View>

            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
                <TabBar />
            </View>

        </SafeAreaView>
    )
}

export default Categories

const styles = StyleSheet.create({})