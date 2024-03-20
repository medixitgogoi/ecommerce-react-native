import { StyleSheet, Text, SafeAreaView, StatusBar, View, TouchableOpacity, FlatList, Image, ScrollView, ActivityIndicator, TextInput, } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { useState, useEffect } from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { addItemToCart } from '../redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import TabBar from '../components/TabBar';
import data from "../data/products";
import axios from 'axios';

const brandsData = [
    { id: '1', name: 'Nike', logo: require('../assets/nike_logo.png') },
    { id: '2', name: 'Adidas', logo: require('../assets/adidas_logo.png') },
    { id: '3', name: 'Puma', logo: require('../assets/puma-logo.png'), width: 37, height: 37, },
    { id: '4', name: 'Reebok', logo: require('../assets/reebok-logo.png'), width: 40, height: 40, },
    { id: '5', name: 'Campus', logo: require('../assets/campus.png'), width: 37, height: 37, },
    { id: '6', name: 'Reebok', logo: require('../assets/nike_logo.png') },
    { id: '7', name: 'Reebok', logo: require('../assets/nike_logo.png') },
];

const Home = ({ navigation }) => {

    const slicedData = data.slice(0, 6);

    // console.log(data)
    // const products = data;

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const slicedProducts = products.slice(0, 6);

    const cartProducts = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const images = [
        require('../assets/discount.jpg'),
        require('../assets/dis2.jpg'),
        require('../assets/dis3.jpeg'),
    ]

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            console.log(response.data)
            const data = response.data;
            setProducts(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(true);
        }
    };

    useEffect(() => {
        fetchProducts();
        // setProducts(data);
    }, [])

    const renderBrandItem = ({ item }) => (
        <TouchableOpacity style={styles.brandItem} onPress={() => navigation.navigate("Category", { data: item.name })}>
            <View style={{ height: 50, width: 50, backgroundColor: "#fff", borderRadius: 100, justifyContent: "center", alignItems: "center", }}>
                <Image
                    source={item.logo}
                    style={{
                        width: item.width ? item.width : 50,
                        height: item.height ? item.height : 50,
                        resizeMode: 'contain',
                        borderRadius: 100,
                    }}
                />
            </View>
            <Text style={styles.brandName}>{item.name}</Text>
        </TouchableOpacity>
    );

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

    return (
        <SafeAreaView style={{ flex: 1, paddingBottom: 53 }}>
            <StatusBar
                animated={true}
                backgroundColor="#e5e3e0"
                barStyle="dark-content"
            />

            {/* Header */}
            <View style={{ backgroundColor: "#e5e3e0", paddingVertical: 8, paddingHorizontal: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
                <Text style={{ color: "#000", fontSize: 20, fontWeight: "700" }}>GCOMMERC</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}>
                        <Icon
                            name="location-sharp"
                            style={{
                                color: '#e27e45',
                                fontSize: 24,
                            }}
                        />
                    </TouchableOpacity>
                    <View style={styles.bellContainer}>
                        <Icon
                            name="notifications"
                            style={{
                                color: '#e27e45',
                                fontSize: 24,
                            }}
                        />
                    </View>
                </View>
            </View>

            {/* Searchbar */}
            <View style={{ backgroundColor: "#e5e3e0", paddingBottom: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 100, paddingHorizontal: 10, marginHorizontal: 16, marginVertical: 8, elevation: 4, }}>

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

            <ScrollView>
                <View style={{ backgroundColor: "#e5e3e0", height: "100%", }}>

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

                    {/* Banner */}
                    <View style={{ backgroundColor: "#fff", borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                        <SliderBox
                            images={images}
                            imageLoadingColor="#e27e45"
                            dotColor="#F29D38"
                            resizeMethod={'resize'}
                            dotStyle={{ width: 30, height: 4, marginRight: 0, marginLeft: 0 }}
                            autoplay
                            circleLoop
                            resizeMode={'cover'}
                            ImageComponentStyle={{ borderRadius: 15, marginTop: 8, backgroundColor: "#000", width: "95%" }}
                            inactiveDotColor="#aeaeae"
                            sliderBoxHeight={120}
                            paginationBoxStyle={{
                                position: "relative",
                                bottom: 0,
                                padding: 0,
                                alignItems: "center",
                                alignSelf: "center",
                                justifyContent: "center",
                            }}
                        />
                    </View>

                    {/* Popular products */}
                    <View style={{ backgroundColor: '#fff', paddingHorizontal: 10, height: "100%", paddingTop: 10, flex: 1 }}>

                        {/* Heading */}
                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginHorizontal: 5, marginBottom: 5 }}>
                            <Text style={{ color: '#000', fontWeight: '700', fontSize: 19 }}>Most popular</Text>
                            <TouchableOpacity>
                                <Text style={{ color: '#e27e45', fontWeight: '600', fontSize: 15 }}>View more</Text>
                            </TouchableOpacity>
                        </View>

                        {/* {loading ? (
                            <ActivityIndicator size="large" color="#e27e45" />
                        ) : ( */}
                        <View style={{ marginTop: 10, marginBottom: 18 }}>
                            <FlatList
                                data={slicedData}
                                numColumns={2}
                                renderItem={({ item }) => {
                                    console.log("datatatatata", item);
                                    return (
                                        <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 10, elevation: 2, width: "48%", margin: 3, }} onPress={() => navigation.navigate('ProductDetails', { data: item })}>
                                            <TouchableOpacity style={{ position: 'absolute', right: 5, top: 5, padding: 3, backgroundColor: "#1f1f1f", borderRadius: 100, zIndex: 10 }}>
                                                <Icon name="heart" size={15} color="#fff" />
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
                                                        <Icon
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
                        {/* )} */}

                    </View>

                    {/* Recently viewed products */}
                    <View style={{ backgroundColor: '#fff', paddingHorizontal: 10, height: "100%", paddingTop: 10, flex: 1, borderTopColor: "#f2f0ef", borderTopWidth: 6,  }}>

                        {/* Heading */}
                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginHorizontal: 5, marginBottom: 10 }}>
                            <Text style={{ color: '#000', fontWeight: '700', fontSize: 19 }}>Recently viewed products</Text>
                        </View>

                        {loading ? (
                            <ActivityIndicator size="large" color="#e27e45" />
                        ) : (
                            <View style={{ marginVertical: 10, }}>
                                <FlatList
                                    data={slicedProducts}
                                    numColumns={2}
                                    renderItem={({ item }) => {

                                        // console.log("datatatatata", item);

                                        return (
                                            <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 10, elevation: 2, width: "48%", margin: 3, }} onPress={() => navigation.navigate('ProductDetails', { data: item })}>
                                                <TouchableOpacity style={{ position: 'absolute', right: 5, top: 5, padding: 3, backgroundColor: "#1f1f1f", borderRadius: 100, zIndex: 10 }}>
                                                    <Icon name="heart" size={15} color="#fff" />
                                                </TouchableOpacity>
                                                <View style={{ margin: 5, paddingVertical: 4, justifyContent: "center", width: "100%", flexDirection: "row", alignItems: "center" }}>
                                                    <Image
                                                        source={{ uri: item.image }}
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
                                                            <Icon
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
                        )}

                    </View>

                </View>

            </ScrollView>

            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
                <TabBar />
            </View>

        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    bellContainer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        width: 25,
        height: 25,
        borderColor: "#e27e45",
        marginLeft: 5
    },
    container: {
        paddingTop: 5,
        marginHorizontal: 15,
        paddingBottom: 10
    },
    brandItem: {
        marginRight: 20,
        alignItems: 'center',
        marginVertical: 3,
    },
    brandName: {
        color: "#000",
        marginTop: 5,
        fontSize: 14,
        fontWeight: '500',
    },
    bannerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    banner: {
        width: '90%',
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
    },
    discountContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 5,
    },
    discountText: {
        color: 'white',
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    arrowLeft: {
        position: 'absolute',
        top: '50%',
        left: 0,
        paddingHorizontal: 10,
        transform: [{ translateY: -10 }],
    },
    arrowRight: {
        position: 'absolute',
        top: '50%',
        right: 0,
        paddingHorizontal: 10,
        transform: [{ translateY: -10 }],
    },
})