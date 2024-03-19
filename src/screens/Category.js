<<<<<<<<< Temporary merge branch 1
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Image, ActivityIndicator, TextInput } from 'react-native';
import { useEffect, useState, useMemo } from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';
import Modal from "react-native-modal";

const Category = ({ navigation, route }) => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    useEffect(() => {
        setModalVisible(true)
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <StatusBar
                animated={true}
                backgroundColor="#f6f6f6"
                barStyle="dark-content"
            />
            <View style={{ backgroundColor: "#f6f6f6", height: "100%" }}>

                {/* header */}
                <View style={{ paddingTop: 6, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 15, backgroundColor: "#f6f6f6" }}>
                    <TouchableOpacity style={{ backgroundColor: "#fff", padding: 5, borderRadius: 100, alignItems: "center", justifyContent: "center", elevation: 1 }} onPress={() => navigation.goBack()}>
                        <Icon name="keyboard-arrow-left" size={20} color="#000" />
                    </TouchableOpacity>
                    <Text style={{ color: "#000", textTransform: "uppercase", fontWeight: "600", fontSize: 17 }}>Category</Text>
                    <TouchableOpacity style={{ backgroundColor: "#fff", padding: 8, borderRadius: 100, alignItems: "center", justifyContent: "center", elevation: 1 }}>
                        <Icon2 name="heart-outline" size={15} color="#000" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text style={{ color: "#000" }}>Show</Text>
                </TouchableOpacity>

                <Modal
                    isVisible={isModalVisible}
                    animationIn="slideInUp"
                    animationOut="slideOutDown"
                    style={{ backgroundColor: "#fff", height: 200, width: 200}}
                >
                    <View style={{ }}>
                        <Text>Hello!</Text>

                        <TouchableOpacity onPress={toggleModal}>
                            <Text style={{ textAlign: "center" }}>Hide</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

            </View>

        </SafeAreaView>
    )
}

export default Category;

const styles = StyleSheet.create({
    brandItem: {
        marginRight: 10,
        alignItems: 'center',
        paddingVertical: 2,
        // backgroundColor: "#fff",
        paddingHorizontal: 1,
    },
    brandName: {
        color: "#000",
        fontSize: 14,
        fontWeight: '400',
        // backgroundColor: "#fff"
    },
    container: {
        elevation: 10,
        paddingTop: 3,
        marginHorizontal: 12,
    },
});