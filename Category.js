import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { useEffect, useState, useMemo } from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';
import Modal from "react-native-modal";
import RadioGroup from 'react-native-radio-buttons-group';

const Category = ({ navigation, route }) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState("");

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    useEffect(() => {
        setModalVisible(true)

    }, [])

    console.log("radioButtonskjwjbwdjcbw", selectedId)

    const radioButtons = useMemo(() => ([
        {
            id: 'M',
            label: (
                <Text style={{ color: "#000", marginLeft: 3, fontSize: 16, fontWeight: "500" }}>{'Men'}</Text>
            ),
            color: "#000",
            size: 15,
        },
        {
            id: 'W',
            label: (
                <Text style={{ color: "#000", marginLeft: 2, fontSize: 16, fontWeight: "500" }}>{'Women'}</Text>
            ),
            color: "#000",
            size: 15,
        },
        {
            id: 'C',
            label: (
                <Text style={{ color: "#000", marginLeft: 3, fontSize: 16, fontWeight: "500" }}>{'Children'}</Text>
            ),
            color: "#000",
            size: 15,
        },
    ]), []);

    // const pressHandler = (id) => {

    // }

    console.log(setSelectedId);

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
                    onBackdropPress={() => setModalVisible(false)}
                    onSwipeComplete={() => setModalVisible(false)}
                >
                    <View style={{ backgroundColor: "#fff", height: 160, width: 300, alignSelf: "center", borderRadius: 10 }}>
                        <Text style={{ color: "#000", fontWeight: "600", textAlign: "center", fontSize: 20, paddingTop: 20 }}>Select category type:</Text>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", height: "70%" }}>
                            <RadioGroup
                                radioButtons={radioButtons}
                                onPress={setSelectedId}
                                selectedId={selectedId}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    )
}

export default Category;

const styles = StyleSheet.create({});