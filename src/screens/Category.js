import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Image, ActivityIndicator, TextInput } from 'react-native';
import { useEffect, useState, useMemo } from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';
import Icon3 from 'react-native-vector-icons/dist/FontAwesome6';
import Modal from "react-native-modal";
import RadioGroup from 'react-native-radio-buttons-group';
import { addItemToCart } from '../redux/CartSlice';
import { useSelector, useDispatch } from 'react-redux';
import TabBar from '../components/TabBar';
import data from "../data/products";
import axios from 'axios';

const Category = ({ navigation, route }) => {

    console.log(data)

    // console.log(route.params.data);
    const category = route.params.data

    const categoryProducts = data.filter(item => item.category === category);
    const subCategoryProducts = categoryProducts.filter(item => item.subCategory === subCategorySelected);

    console.log(categoryProducts);

    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState("");
    const [subCategorySelected, setSubCategorySelected] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const cartProducts = useSelector(state => state.cart);

    const brandsData = [
        { id: '1', name: 'Sort by', iconName: "keyboard-arrow-down" },
        { id: '2', name: 'Filter', iconName: "filter-list" },
        { id: '3', name: 'Gender', iconName: "keyboard-arrow-down" },
        { id: '4', name: 'Brand', iconName: "keyboard-arrow-down" },
        { id: '5', name: 'Size', iconName: "keyboard-arrow-down" },
        { id: '6', name: 'Discount', iconName: "keyboard-arrow-down" },
    ];

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handlePress = (id) => {
        setSelectedId(id)

    }

    useEffect(() => {

    }, [subCategorySelected])

    // const fetchProducts = async () => {
    //     try {
    //         const response = await axios.get('https://fakestoreapi.com/products');
    //         console.log(response.data)
    //         setProducts(response.data);
    //         setLoading(false);
    //     } catch (error) {
    //         console.error('Error fetching products:', error);
    //         setLoading(false);
    //     }
    // };

    // // setModalVisible(true)
    // useEffect(() => {
    //     fetchProducts();
    // }, [])

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

    const renderBrandItem = ({ item }) => (
        <TouchableOpacity style={styles.brandItem}>
            <View style={{ backgroundColor: "#fff", paddingHorizontal: 10, borderRadius: 20, justifyContent: 'center', alignItems: "center", flexDirection: "row", paddingVertical: 4, borderColor: "#83a597", elevation: 3 }}>
                <Text style={styles.brandName}>{item.name}</Text>
                <Icon
                    name={item.iconName}
                    size={18}
                    style={{
                        color: '#000',
                        marginLeft: 4,
                        fontWeight: "600",
                    }}
                />
            </View>
        </TouchableOpacity>
    );

    const radioButtons = useMemo(() => ([
        {
            id: 'men',
            label: (
                <Text style={{ color: "#000", marginLeft: 3, fontSize: 16, fontWeight: "500" }}>{'Men'}</Text>
            ),
            color: "#000",
            size: 15,
        },
        {
            id: 'women',
            label: (
                <Text style={{ color: "#000", marginLeft: 2, fontSize: 16, fontWeight: "500" }}>{'Women'}</Text>
            ),
            color: "#000",
            size: 15,
        },
        {
            id: 'children',
            label: (
                <Text style={{ color: "#000", marginLeft: 3, fontSize: 16, fontWeight: "500" }}>{'Children'}</Text>
            ),
            color: "#000",
            size: 15,
        },
    ]), []);

    return (
        <SafeAreaView style={{ flex: 1, paddingBottom: 53 }}>

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
                    <Text style={{ color: "#000", textTransform: "uppercase", fontWeight: "600", fontSize: 17 }}>{category} products</Text>
                    <TouchableOpacity style={{ backgroundColor: "#f6f6f6", padding: 8, alignItems: "center", justifyContent: "center", }} onPress={() => navigation.navigate("Cart")}>
                        <Icon2 name="cart-outline" size={19} color="#000" />
                        <View style={{ backgroundColor: "#e27e45", width: 15, height: 15, borderRadius: 100, justifyContent: "center", alignItems: "center", position: "absolute", top: 1, right: 2 }}>
                            <Text style={{ color: "#fff", fontSize: 10, fontWeight: "600" }}>{cartProducts.length}</Text>
                        </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Text style={{ color: "#000" }}>Show</Text>
                    </TouchableOpacity> */}
                </View>

                {/* Searchbar */}
                <View style={{ backgroundColor: "#f6f6f6", marginTop: 6 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 100, paddingHorizontal: 10, marginHorizontal: 16, marginVertical: 8, elevation: 2, }}>

                        <View style={{ backgroundColor: "#e27e45", borderRadius: 100, alignItems: "center", justifyContent: "center", padding: 6, marginRight: 3, }}>
                            <Icon name="search" size={16} color="#fff" style={{}} />
                        </View>

                        <TextInput
                            placeholder="Search for products and brands"
                            placeholderTextColor="#aea79e"
                            style={{ flex: 1, fontSize: 16, color: '#000', paddingVertical: 8, fontWeight: "400", }}
                        />
                    </View>
                </View>

                {/* Brands */}
                <View style={styles.container}>
                    <FlatList
                        data={brandsData}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={renderBrandItem}
                    />
                </View>

                <View>
                    {loading ? (
                        <ActivityIndicator size="large" color="#e27e45" />
                    ) : (
                        <View style={{ marginVertical: 10, marginHorizontal: 5, paddingTop: 3 }}>
                            <FlatList
                                data={categoryProducts}
                                style={{ marginBottom: 140 }}
                                numColumns={2}
                                renderItem={({ item }) => (
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
                                )}
                                keyExtractor={(item) => item.id.toString()}
                            />
                        </View>
                    )}
                </View>

                <Modal
                    isVisible={isModalVisible}
                    animationIn="slideInUp"
                    animationOut="slideOutDown"
                    onBackdropPress={() => setModalVisible(false)}
                    onSwipeComplete={() => setModalVisible(false)}
                >
                    <View style={{ backgroundColor: "#fff", height: 160, width: 300, alignSelf: "center", borderRadius: 10 }}>
                        <Text style={{ color: "#000", fontWeight: "600", textAlign: "center", fontSize: 20, paddingTop: 20 }}>Select sub-category type:</Text>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", height: "70%" }}>
                            <RadioGroup
                                radioButtons={radioButtons}
                                onPress={handlePress}
                                selectedId={selectedId}
                            />
                        </View>
                    </View>
                </Modal>

            </View>

            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
                <TabBar />
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