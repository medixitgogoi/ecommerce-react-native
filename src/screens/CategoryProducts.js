import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView, StatusBar, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';
import { addItemToCart } from '../redux/CartSlice';
import { useDispatch } from 'react-redux';
import Modal from "react-native-modal";
import Icon3 from 'react-native-vector-icons/dist/Ionicons';
import { useState, useEffect } from 'react';

const CategoryProducts = ({ navigation, route }) => {

    const [filterModal, setFilterModal] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(1);

    // const filteredProducts =

    // console.log("Dixitttttttt", route.params.data);

    const cat = route.params.data.category
    const products = route.params.data.products;

    console.log(products)

    const dispatch = useDispatch();

    const renderStarRating = (rating) => {
        const starComponents = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                starComponents.push(<Icon key={i} name="star" size={13} color="#FFD700" />);
            } else {
                starComponents.push(<Icon key={i} name="star-outline" size={13} color="#FFD700" />);
            }
        }
        return starComponents;
    };

    const laptopCategories = [
        {
            id: 1,
            name: "Processor"
        },
        {
            id: 2,
            name: "RAM"
        },
        {
            id: 3,
            name: "SSD"
        },
        {
            id: 4,
            name: "OS"
        },
        {
            id: 5,
            name: "Chip"
        },
    ]

    useEffect(() => {

    }, [selectedFilter])

    const pressHandler = (id) => {
        setSelectedFilter(id)
    }

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
                <Text style={{ color: "#000", textTransform: "uppercase", fontWeight: "800", fontSize: responsiveFontSize(2.2), marginLeft: 10 }}>{cat}</Text>
            </View>

            <ScrollView style={{ flex: 1, }}>

                {/* Filter */}
                <View style={{ paddingHorizontal: 8, paddingVertical: 10, backgroundColor: "#f6f6f6", }}>
                    <TouchableOpacity style={{ backgroundColor: "#e2aa45", padding: 7, flexDirection: "row", justifyContent: "center", alignItems: "center", width: "30%", elevation: 3, borderRadius: 5 }} onPress={() => setFilterModal(true)}>
                        <Text style={{ color: "#fff", fontWeight: "450", fontSize: 16, fontWeight: "500" }}>
                            Filter
                        </Text>
                        <View style={{ marginLeft: 5, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Icon3 name="filter" size={15} color="#fff" />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Filters */}
                <View style={{ backgroundColor: "#f6f6f6", height: "100%", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", paddingHorizontal: 3 }}>
                    <View>
                        <FlatList
                            data={products}
                            numColumns={2}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 10, elevation: 2, width: "48%", margin: 3, }} onPress={() => navigation.navigate('ProductDetails', { data: item })}>
                                        <TouchableOpacity style={{ position: 'absolute', right: 5, top: 5, padding: 3, backgroundColor: "#1f1f1f", borderRadius: 100, zIndex: 10 }}>
                                            <Icon2 name="heart" size={15} color="#fff" />
                                        </TouchableOpacity>
                                        <View style={{ margin: 5, paddingVertical: 4, justifyContent: "center", width: "100%", flexDirection: "row", alignItems: "center" }}>
                                            <Image
                                                source={{ uri: item.images[0] }}
                                                style={{
                                                    width: 100,
                                                    height: 100,
                                                    resizeMode: 'contain',
                                                }}
                                            />
                                        </View>

                                        <View style={{ paddingHorizontal: 8, marginTop: 5, backgroundColor: "#f8f8f7", borderRadius: 10, paddingTop: 10 }}>

                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 7 }}>
                                                {renderStarRating(item.rating.rate)}
                                                <Text style={{ marginLeft: 4, color: '#333', fontWeight: "600" }}>{item.rating.rate}</Text>
                                            </View>

                                            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
                                                <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 15, fontWeight: 'bold', color: "#000" }}>{item.title}</Text>
                                            </View>

                                            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, width: "100%" }}>
                                                <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 13, fontWeight: '600', color: "#a2a2a2", textAlign: "justify", }}>{item.description}</Text>
                                            </View>

                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                                <Text style={{ fontSize: 15, fontWeight: '700', marginRight: 4, color: "#000" }}>₹{item.price * 100}</Text>
                                                <View style={{ backgroundColor: "#55961d", paddingVertical: 1, borderRadius: 4, paddingHorizontal: 5 }}>
                                                    <Text style={{ fontSize: 12, color: '#fff', fontWeight: "600" }}>10% off</Text>
                                                </View>
                                            </View>

                                            {/* Add to bag */}
                                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
                                                <TouchableOpacity style={{ backgroundColor: "#e27e45", borderRadius: 10, paddingVertical: 8, alignItems: 'center', marginVertical: 10, width: "100%", flexDirection: "row", justifyContent: "center" }} onPress={() => dispatch(addItemToCart(item))}>
                                                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>Add to bag</Text>
                                                    <Text style={{ color: "#fff", marginLeft: 5, fontSize: 16, fontWeight: '600', }}>(</Text>
                                                    <Icon2
                                                        name="bag"
                                                        size={17}
                                                        style={{
                                                            color: '#fff',
                                                            marginRight: 2,
                                                            fontWeight: "600",
                                                            marginLeft: 2
                                                        }}
                                                    />
                                                    <Text style={{ color: "#fff", fontSize: 16, fontWeight: '600', }}>)</Text>
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                </View>

                {/* Filter modal*/}
                <Modal
                    isVisible={filterModal}
                    onBackdropPress={() => setFilterModal(false)}
                    onSwipeComplete={() => setFilterModal(false)}
                    // swipeDirection={['down']}
                    backdropOpacity={0.5}
                    style={{ justifyContent: 'flex-end', margin: 0 }}
                >

                    <View
                        style={{
                            height: "100%",
                            backgroundColor: "#fff",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            left: 0,
                            width: "100%",
                        }}>

                        {/* Heading */}
                        <View style={{ marginTop: 15 }}>
                            <View style={{ width: "100%", paddingHorizontal: 23, }}>

                                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <TouchableOpacity style={{ backgroundColor: "#f6f6f6", padding: 5, borderRadius: 100, alignItems: "center", justifyContent: "center", elevation: 1, }} onPress={() => setFilterModal(false)}>
                                            <Icon name="keyboard-arrow-left" size={20} color="#000" />
                                        </TouchableOpacity>
                                        <Text style={{ color: "#e27e45", fontSize: responsiveFontSize(2.3), fontWeight: "500", marginLeft: 5 }}>
                                            Filters
                                        </Text>
                                    </View>
                                    <TouchableOpacity
                                        // onPress={() => languageremove()}
                                        style={{
                                            backgroundColor: "#e27e45",
                                            borderRadius: 5,
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <Text style={{
                                            color: "#fff",
                                            fontSize: responsiveFontSize(1.8),
                                            paddingHorizontal: 9,
                                            paddingVertical: 3,
                                            fontWeight: "500",
                                        }}>
                                            Clear Filters
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>

                        {/* Filters */}
                        <ScrollView style={{ flex: 1 }}>
                            <View style={{ marginVertical: 10, flexDirection: "row", width: "100%" }}>

                                <View style={{ height: "100%", width: "35%", flexDirection: "column", alignItems: "center", }}>
                                    {laptopCategories.map((item) => (
                                        <TouchableOpacity style={{ paddingVertical: 15, padding: 5, backgroundColor: selectedFilter === item.id ? "#fff" : "#f1f1f1", width: "100%", flexDirection: "row", justifyContent: "center" }} key={item.id} onPress={() => pressHandler(item.id)}>
                                            <Text style={{ color: "#000" }}>{item.name}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>

                                <View style={{ height: "100%", width: "65%", backgroundColor: "red" }}>

                                </View>

                            </View>
                        </ScrollView>

                        {/* buttonStyle */}
                        <View style={{ width: '100%', flexDirection: 'row', paddingVertical: 15, justifyContent: "space-evenly" }}>

                            <View
                                style={{
                                    width: '40%',
                                    borderColor: '#F29D38',
                                    borderWidth: 1,
                                    borderRadius: 20,
                                }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => setFilterModal(false)}>
                                    <Text
                                        style={{
                                            color: '#e27e45',
                                            textAlign: 'center',
                                            padding: 8,
                                            fontSize: 15,
                                            fontWeight: "600"
                                        }}>
                                        Cancel
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View
                                style={{
                                    width: '40%',
                                    backgroundColor: '#e27e45',

                                    borderRadius: 20,
                                    marginLeft: 3,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <TouchableOpacity
                                    onPress={() => languagesearchFilterFunction()}
                                    languagesearchFilterFunction
                                    activeOpacity={0.7}
                                    style={{
                                    }}>
                                    <Text
                                        style={{
                                            color: '#fff',
                                            textAlign: 'center',
                                            padding: 8,
                                            fontSize: 15,
                                            fontWeight: "600"
                                        }}>
                                        Apply Filter
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={{ marginBottom: 10 }}></View>

                    </View>

                </Modal>

            </ScrollView>

        </SafeAreaView>
    )
}

export default CategoryProducts

const styles = StyleSheet.create({})