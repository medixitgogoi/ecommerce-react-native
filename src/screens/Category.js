import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
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


































// {/* skillsss model */ }
// <Modal
//     isVisible={skilllssss}
//     onBackdropPress={() => setskilllssss(false)}
//     onSwipeComplete={() => setskilllssss(false)}
//     backdropOpacity={0.5}
//     style={{ justifyContent: 'flex-end', margin: 0 }}


// >
//     <View
//         style={{
//             height: "auto",
//             backgroundColor: "#fff",
//             position: "absolute",
//             bottom: 0,
//             right: 0,
//             left: 0,
//             width: "100%",
//             borderTopLeftRadius: 30,
//             borderTopRightRadius: 30,
//             // paddingHorizontal: 15,
//             borderColor: "#F29D38",
//             borderWidth: 0.95
//         }}>

//         <View style={{ marginTop: 15 }}>
//             <View style={{ width: "100%" }}>

//                 <View style={{ paddingHorizontal: 15, flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
//                     <Text style={{ color: "#F29D38", fontSize: responsiveFontSize(2.3), fontWeight: "700" }}>
//                         Skills
//                     </Text>
//                     <TouchableOpacity
//                         onPress={() => skillremove()}
//                         style={{
//                             backgroundColor: "#F29D38",
//                             borderRadius: 10,
//                             alignItems: "center",
//                             justifyContent: "center"
//                         }}
//                     >
//                         <Text style={{
//                             color: "#fff",
//                             fontSize: responsiveFontSize(1.5),
//                             fontWeight: "300",
//                             paddingHorizontal: 10,
//                             paddingVertical: 2
//                         }}>
//                             Reset All
//                         </Text>
//                     </TouchableOpacity>
//                 </View>

//                 <RadioGroup
//                     // radioButtons={skilbutton}
//                     radioButtons={skillsapii && skillsapii.map((item) => {

//                         return (
//                             {

//                                 id: item.name,
//                                 label: (
//                                     <Text style={{ color: "#000", }}>{item.name}</Text>
//                                 ),
//                                 color: "#F29D38",
//                                 size: responsiveFontSize(3),
//                             }
//                         )
//                     })}
//                     onPress={setSelectedskills}
//                     selectedId={selectedskills}
//                     containerStyle={styles.ViewCard}
//                 />
//             </View>
//         </View>

//         {/* buttonStyle */}

//         <View
//             style={{ width: '100%', flexDirection: 'row', paddingTop: 15, paddingHorizontal: 10 }}>
//             <View
//                 style={{
//                     width: '50%',
//                     backgroundColor: '#F29D38',
//                     borderRadius: 20,
//                 }}>
//                 <TouchableOpacity
//                     activeOpacity={0.7}
//                     onPress={() => skillclosebutton()}>
//                     <Text
//                         style={{
//                             color: '#fff',
//                             textAlign: 'center',
//                             padding: 8,
//                             borderRightColor: '#fff',
//                             borderRightWidth: 1,
//                             fontSize: 15,
//                         }}>
//                         Cancel
//                     </Text>
//                 </TouchableOpacity>
//             </View>


//             <View
//                 style={{
//                     width: '50%',
//                     backgroundColor: '#fff',
//                     borderColor: '#F29D38',
//                     borderWidth: 1,
//                     borderRadius: 20,
//                     marginLeft: 3,
//                     flexDirection: "row",
//                     alignItems: "center",
//                     justifyContent: "center"
//                 }}>
//                 <TouchableOpacity
//                     onPress={() => skillsearchFilterFunction()}
//                     activeOpacity={0.7}
//                     style={{
//                     }}>
//                     <Text
//                         style={{
//                             color: '#F29D38',
//                             textAlign: 'center',
//                             padding: 8,
//                             fontSize: 15,

//                         }}>
//                         Apply Filter
//                     </Text>
//                 </TouchableOpacity>
//             </View>
//         </View>

//         <View style={{ marginBottom: 10 }}></View>
//     </View>
// </Modal>