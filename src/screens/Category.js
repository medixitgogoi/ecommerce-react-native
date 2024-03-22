import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Image, ActivityIndicator, TextInput } from 'react-native';
import { useEffect, useState, useMemo } from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';
import Modal from "react-native-modal";
import RadioGroup from 'react-native-radio-buttons-group';
import { addItemToCart } from '../redux/CartSlice';
import { useSelector, useDispatch } from 'react-redux';
import TabBar from '../components/TabBar';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const Category = ({ navigation, route }) => {

    const category = route.params.data

    const categoryProducts = data.filter(item => item.category === category);

    const [okpress, setOkpress] = useState(false);
    const [isModalVisible, setModalVisible] = useState(true);
    const [selectedId, setSelectedId] = useState("");
    const [pricemodel, setpricemodel] = useState(false);
    const [Ratingmodel, setRatingmodel] = useState("");
    const [Categoriesmodel, setCategoriesmodel] = useState(false);
    const [Categoryname, setCategoryname] = useState("");
    const [ratingname, setratingname] = useState([]);
    const [pricename, setpricename] = useState([]);
    const [gendername, setgendername] = useState([]);
    const [loading, setLoading] = useState(false);
    const [SortedBYmodel, setSortedBYmodel] = useState(false);
    const [filtermodel, setfiltermodel] = useState(false);
    const [Gendermodel, setGendermodel] = useState(false);
    const [sortedname, setsortedname] = useState([]);
    const [Brandmodel, setBrandmodel] = useState(false);
    const [Discountmodel, setDiscountmodel] = useState(false);
    const dispatch = useDispatch();

    const cartProducts = useSelector(state => state.cart);

    const brandsData = [
        { id: '1', name: 'Sort by', iconName: "keyboard-arrow-down" },
        { id: '2', name: 'Categories', iconName: "filter-list" },
        { id: '3', name: 'Gender', iconName: "keyboard-arrow-down" },
        { id: '4', name: 'price', iconName: "keyboard-arrow-down" },
        { id: '5', name: 'Rating', iconName: "keyboard-arrow-down" },
    ];

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const pressHandler = () => {
        if (selectedId) {
            setModalVisible(false);
        }
        setOkpress(true)
    }

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

    const renderBrandItem = ({ item }) => {
        console.log("itemitem", item.name == "Sort by")
        return (
            <TouchableOpacity
                onPress={() => {
                    if (item.name === "Sort by") {
                        setSortedBYmodel(true);
                    } else if (item.name === "Filter") {
                        setfiltermodel(true)
                    } else if (item.name === "Gender") {
                        setGendermodel(true)
                    } else if (item.name === "price") {
                        setpricemodel(true)
                    } else if (item.name === "Rating") {
                        setRatingmodel(true)
                    } else if (item.name === "Categories") {
                        setCategoriesmodel(true)
                    }
                }}
                style={styles.brandItem}>
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

    }

    const radioButtons = useMemo(() => ([
        {
            id: 'men',
            label: (
                <Text style={{ color: "#474747", marginLeft: 3, fontSize: 16, fontWeight: "500" }}>{'Men'}</Text>
            ),
            color: "#585858",
            size: 15,
        },
        {
            id: 'women',
            label: (
                <Text style={{ color: "#474747", marginLeft: 3, fontSize: 16, fontWeight: "500" }}>{'Women'}</Text>
            ),
            color: "#585858",
            size: 15,
        },
        {
            id: 'children',
            label: (
                <Text style={{ color: "#474747", marginLeft: 3, fontSize: 16, fontWeight: "500" }}>{'Children'}</Text>
            ),
            color: "#585858",
            size: 15,
        },
    ]), []);

    const sortbutton = useMemo(() => ([
        {
            id: 'Relavent',
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'Relavent'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

        },
        {
            id: 'Newest Products',
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'Newest Products'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

        },
        {
            id: 'Price -- Low To High',
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'Price -- Low To High'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

        },
        {
            id: 'Price -- Low To High',
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'Price -- Low To High'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

        },

    ]), []);

    const GenderButton = useMemo(() => ([
        {
            id: 'men',
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'Male'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

        },
        {
            id: 'women',
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'Female'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

        },
        {
            id: 'children',
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'children'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

        },

    ]), []);

    const pricebutton = useMemo(() => ([
        {
            id: "100 - 500",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{' > ₹500'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),
            // value: 'option1'
        },
        {
            id: "500 - 650",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'₹500 - ₹650'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),
            // value: 'option2'
        },
        {
            id: "650 - 850",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'₹650 - ₹850'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),
            // value: 'option2'
        },
        {
            id: "850 - 1000",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'₹850 - ₹1000 '}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

        },
        {
            id: "1000 -3000",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'₹1000 +'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

        },
    ]), []);

    const ratingbutton = useMemo(() => ([
        {
            id: "1",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'1+'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),
            // value: 'option1'
        },
        {
            id: "2",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'2+'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),
            // value: 'option2'
        },
        {
            id: "3",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'3+'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),
            // value: 'option2'
        },
        {
            id: "4",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'4+'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

        },
        {
            id: "5",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'5+'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

        },
    ]), []);

    const categorybutton = useMemo(() => ([
        {
            id: "1",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'Shoes'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),
            // value: 'option1'
        },
        {
            id: "2",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'Cloths'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),
            // value: 'option2'
        },
        {
            id: "3",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'Cap'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),
            // value: 'option2'
        },
        {
            id: "4",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'Bags'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

        },
        {
            id: "5",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'Glasses'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

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
                                style={{ marginBottom: 150 }}
                                numColumns={2}
                                renderItem={({ item }) => {
                                    console.log("itemitem11", item)
                                    if (selectedId == item.subCategory && okpress) {
                                        return (
                                            <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 10, elevation: 2, width: "48%", margin: 3, }} onPress={() => navigation.navigate('ProductDetails', { data: item })}>
                                                {/* <Text style={{ color: "red" }}>oooooo</Text> */}
                                                <TouchableOpacity style={{ position: 'absolute', right: 5, top: 5, padding: 3, backgroundColor: "#1f1f1f", borderRadius: 100, zIndex: 10 }}>
                                                    <Icon2 name="heart" size={15} color="#fff" />
                                                    {/* <Text style={{ color: "#fff" }}>{item.subCategory}</Text> */}
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
                                                    <View>
                                                        <Text style={{ color: "#000" }}>{item.subCategory}</Text>
                                                    </View>
                                                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
                                                        <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 15, fontWeight: 'bold', color: "#000" }}>{item.title}</Text>
                                                        <Text style={{ color: "#" }}>{item.subCategory}</Text>
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

                                    } else {
                                        return null
                                    }
                                }
                                }
                                keyExtractor={(item) => item.id.toString()}
                            />
                        </View>
                    )}
                </View>
            </View>

            <Modal
                isVisible={isModalVisible}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                // onBackdropPress={() => setModalVisible(false)}
                onSwipeComplete={() => setModalVisible(false)}
            >
                <View style={{
                    backgroundColor: "#fff", height: 160, width: 300, alignSelf: "center", borderRadius: 10, flexDirection: "column", justifyContent: "space-between"
                }}>
                    <View style={{ paddingHorizontal: 20, flexDirection: "column", justifyContent: "space-evenly", flex: 1, paddingBottom: 15 }}>
                        <View style={{}}>
                            <Text style={{ color: "#000", fontWeight: "500", fontSize: 20, paddingTop: 10, marginLeft: 10, textAlign: "center" }}>Select sub-category type:</Text>
                        </View>
                        <View style={{ flexDirection: "row", }}>
                            <RadioGroup
                                radioButtons={radioButtons}
                                onPress={setSelectedId}
                                selectedId={selectedId}
                                layout='row'
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", borderTopColor: "#e27e45", borderTopWidth: 0.4 }}>
                        <TouchableOpacity style={{ flex: 1, alignItems: "center", justifyContent: "center" }} onPress={() => navigation.navigate("Home")}>
                            <Text style={{ textAlign: "center", color: "#383838", fontWeight: "600" }}>
                                CANCEL
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, backgroundColor: "#e27e45", height: 40, alignItems: "center", justifyContent: "center", borderBottomRightRadius: 10 }} onPress={() => pressHandler()}>
                            <Text style={{ textAlign: "center", fontWeight: "600", color: "#fff" }}>
                                OK
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
                <TabBar />
            </View>

            {/* SortedBY */}
            <Modal
                isVisible={SortedBYmodel}
                onBackdropPress={() => setSortedBYmodel(false)}
                onSwipeComplete={() => setSortedBYmodel(false)}
                backdropOpacity={0.5}
                style={{ justifyContent: 'flex-end', margin: 0 }}>
                <View
                    style={{
                        height: "auto",
                        backgroundColor: "#fff",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        left: 0,
                        width: "100%",
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        // paddingHorizontal: 15,
                        borderColor: "#e27e45",
                        borderWidth: 0.55
                    }}>
                    <View style={{ marginTop: 15 }}>
                        <View style={{ width: "100%" }}>
                            <View style={{ paddingHorizontal: 15, flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                <Text style={{ color: "#e27e45", fontSize: responsiveFontSize(2.3), fontWeight: "700" }}>
                                    Sort By
                                </Text>
                                <TouchableOpacity

                                    style={{
                                        backgroundColor: "#e27e45",
                                        borderRadius: 10,
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    <Text style={{
                                        color: "#fff",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "400",
                                        paddingHorizontal: 10,
                                        paddingVertical: 2
                                    }}>
                                        Reset All
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <RadioGroup
                                radioButtons={sortbutton}
                                onPress={setsortedname}
                                selectedId={sortedname}
                                containerStyle={styles.ViewCard}
                            />

                        </View>
                    </View>

                    {/* buttonStyle */}
                    <View
                        style={{ width: '100%', flexDirection: 'row', paddingTop: 15, paddingHorizontal: 10 }}>
                        <View
                            style={{
                                width: '50%',
                                backgroundColor: '#e27e45',
                                borderRadius: 20,
                            }}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => setSortedBYmodel(false)}>
                                <Text
                                    style={{
                                        color: '#fff',
                                        textAlign: 'center',
                                        padding: 8,
                                        borderRightColor: '#fff',
                                        borderRightWidth: 1,
                                        fontSize: 15,
                                    }}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                        </View>


                        <View
                            style={{
                                width: '50%',
                                backgroundColor: '#fff',
                                borderColor: '#e27e45',
                                borderWidth: 1,
                                borderRadius: 20,
                                marginLeft: 3,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                            <TouchableOpacity
                                // onPress={() => languagesearchFilterFunction()}
                                onPress={() => setSortedBYmodel(false)}
                                languagesearchFilterFunction
                                activeOpacity={0.7}
                                style={{
                                }}>
                                <Text
                                    style={{
                                        color: '#e27e45',
                                        textAlign: 'center',
                                        padding: 8,
                                        fontSize: 15,

                                    }}>
                                    Apply Filter
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginBottom: 10 }}></View>
                </View>
            </Modal>

            {/* filter*/}
            <Modal
                isVisible={filtermodel}
                onBackdropPress={() => setfiltermodel(false)}
                onSwipeComplete={() => setfiltermodel(false)}
                // swipeDirection={['down']}
                backdropOpacity={0.5}
                style={{ justifyContent: 'flex-end', margin: 0 }} >
                <View
                    style={{
                        height: "auto",
                        backgroundColor: "#fff",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        left: 0,
                        width: "100%",
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        // paddingHorizontal: 15,
                        borderColor: "#e27e45",
                        borderWidth: 0.55
                    }}>
                    <View style={{ marginTop: 15 }}>
                        <View style={{ width: "100%" }}>
                            <View style={{ paddingHorizontal: 15, flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                <Text style={{ color: "#e27e45", fontSize: responsiveFontSize(2.3), fontWeight: "700" }}>
                                    Sort By
                                </Text>
                                <TouchableOpacity
                                    // onPress={() => languageremove()}
                                    style={{
                                        backgroundColor: "#e27e45",
                                        borderRadius: 10,
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    <Text style={{
                                        color: "#fff",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "400",
                                        paddingHorizontal: 10,
                                        paddingVertical: 2
                                    }}>
                                        Reset All
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>

                    {/* buttonStyle */}

                    <View
                        style={{ width: '100%', flexDirection: 'row', paddingTop: 15, paddingHorizontal: 10 }}>
                        <View
                            style={{
                                width: '50%',
                                backgroundColor: '#e27e45',
                                borderRadius: 20,
                            }}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => setfiltermodel(false)}>
                                <Text
                                    style={{
                                        color: '#fff',
                                        textAlign: 'center',
                                        padding: 8,
                                        borderRightColor: '#fff',
                                        borderRightWidth: 1,
                                        fontSize: 15,
                                    }}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                        </View>


                        <View
                            style={{
                                width: '50%',
                                backgroundColor: '#fff',
                                borderColor: '#e27e45',
                                borderWidth: 1,
                                borderRadius: 20,
                                marginLeft: 3,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                            <TouchableOpacity
                                onPress={() => () => setfiltermodel(false)}
                                languagesearchFilterFunction
                                activeOpacity={0.7}
                                style={{
                                }}>
                                <Text
                                    style={{
                                        color: '#e27e45',
                                        textAlign: 'center',
                                        padding: 8,
                                        fontSize: 15,

                                    }}>
                                    Apply Filter
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginBottom: 10 }}></View>
                </View>
            </Modal>

            {/* gender*/}
            <Modal
                isVisible={Gendermodel}
                onBackdropPress={() => setGendermodel(false)}
                onSwipeComplete={() => setGendermodel(false)}
                // swipeDirection={['down']}
                backdropOpacity={0.5}
                style={{ justifyContent: 'flex-end', margin: 0 }}
            >
                <View
                    style={{
                        height: "auto",
                        backgroundColor: "#fff",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        left: 0,
                        width: "100%",
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        // paddingHorizontal: 15,
                        borderColor: "#e27e45",
                        borderWidth: 0.55
                    }}>

                    <View style={{ marginTop: 15 }}>
                        <View style={{ width: "100%" }}>


                            <View style={{ paddingHorizontal: 15, flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                <Text style={{ color: "#e27e45", fontSize: responsiveFontSize(2.3), fontWeight: "700" }}>
                                    Gender
                                </Text>
                                <TouchableOpacity
                                    onPress={() => languageremove()}
                                    style={{
                                        backgroundColor: "#e27e45",
                                        borderRadius: 10,
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    <Text style={{
                                        color: "#fff",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "400",
                                        paddingHorizontal: 10,
                                        paddingVertical: 2
                                    }}>
                                        Reset All
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <RadioGroup
                                radioButtons={GenderButton}
                                onPress={setgendername}
                                selectedId={gendername}
                                containerStyle={styles.ViewCard}
                            />
                        </View>
                    </View>

                    {/* buttonStyle */}

                    <View
                        style={{ width: '100%', flexDirection: 'row', paddingTop: 15, paddingHorizontal: 10 }}>

                        <View
                            style={{
                                width: '50%',
                                backgroundColor: '#e27e45',
                                borderRadius: 20,
                            }}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => setGendermodel(false)}>
                                <Text
                                    style={{
                                        color: '#fff',
                                        textAlign: 'center',
                                        padding: 8,
                                        borderRightColor: '#fff',
                                        borderRightWidth: 1,
                                        fontSize: 15,
                                    }}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                        </View>


                        <View
                            style={{
                                width: '50%',
                                backgroundColor: '#fff',
                                borderColor: '#e27e45',
                                borderWidth: 1,
                                borderRadius: 20,
                                marginLeft: 3,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                            <TouchableOpacity
                                onPress={() => setGendermodel(false)}
                                languagesearchFilterFunction
                                activeOpacity={0.7}
                                style={{
                                }}>
                                <Text
                                    style={{
                                        color: '#e27e45',
                                        textAlign: 'center',
                                        padding: 8,
                                        fontSize: 15,

                                    }}>
                                    Apply Filter
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginBottom: 10 }}></View>
                </View>
            </Modal>

            {/* pricemodel */}

            <Modal
                isVisible={pricemodel}
                onBackdropPress={() => setpricemodel(false)}
                onSwipeComplete={() => setpricemodel(false)}
                // swipeDirection={['down']}
                backdropOpacity={0.5}
                style={{ justifyContent: 'flex-end', margin: 0 }}
            >
                <View
                    style={{
                        height: "auto",
                        backgroundColor: "#fff",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        left: 0,
                        width: "100%",
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        // paddingHorizontal: 15,
                        borderColor: "#e27e45",
                        borderWidth: 0.55
                    }}>

                    <View style={{ marginTop: 15 }}>
                        <View style={{ width: "100%" }}>


                            <View style={{ paddingHorizontal: 15, flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                <Text style={{ color: "#e27e45", fontSize: responsiveFontSize(2.3), fontWeight: "700" }}>
                                    Price
                                </Text>
                                <TouchableOpacity
                                    onPress={() => languageremove()}
                                    style={{
                                        backgroundColor: "#e27e45",
                                        borderRadius: 10,
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    <Text style={{
                                        color: "#fff",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "300",
                                        paddingHorizontal: 10,
                                        paddingVertical: 2
                                    }}>
                                        Reset All
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <RadioGroup
                                radioButtons={pricebutton}
                                onPress={setpricename}
                                selectedId={pricename}
                                containerStyle={styles.ViewCard}
                            />
                        </View>
                    </View>

                    {/* buttonStyle */}

                    <View
                        style={{ width: '100%', flexDirection: 'row', paddingTop: 15, paddingHorizontal: 10 }}>

                        <View
                            style={{
                                width: '50%',
                                backgroundColor: '#e27e45',
                                borderRadius: 20,
                            }}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => setpricemodel(false)}>
                                <Text
                                    style={{
                                        color: '#fff',
                                        textAlign: 'center',
                                        padding: 8,
                                        borderRightColor: '#fff',
                                        borderRightWidth: 1,
                                        fontSize: 15,
                                    }}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                        </View>


                        <View
                            style={{
                                width: '50%',
                                backgroundColor: '#fff',
                                borderColor: '#e27e45',
                                borderWidth: 1,
                                borderRadius: 20,
                                marginLeft: 3,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                            <TouchableOpacity
                                onPress={() => setpricemodel(false)}
                                languagesearchFilterFunction
                                activeOpacity={0.7}
                                style={{
                                }}>
                                <Text
                                    style={{
                                        color: '#F29D38',
                                        textAlign: 'center',
                                        padding: 8,
                                        fontSize: 15,

                                    }}>
                                    Apply Filter
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginBottom: 10 }}></View>
                </View>
            </Modal>

            {/* rating*/}
            <Modal
                isVisible={Ratingmodel}
                onBackdropPress={() => setRatingmodel(false)}
                onSwipeComplete={() => setRatingmodel(false)}
                // swipeDirection={['down']}
                backdropOpacity={0.5}
                style={{ justifyContent: 'flex-end', margin: 0 }}
            >
                <View
                    style={{
                        height: "auto",
                        backgroundColor: "#fff",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        left: 0,
                        width: "100%",
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        // paddingHorizontal: 15,
                        borderColor: "#e27e45",
                        borderWidth: 0.55
                    }}>

                    <View style={{ marginTop: 15 }}>
                        <View style={{ width: "100%" }}>


                            <View style={{ paddingHorizontal: 15, flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                <Text style={{ color: "#e27e45", fontSize: responsiveFontSize(2.3), fontWeight: "700" }}>
                                    Price
                                </Text>
                                <TouchableOpacity
                                    onPress={() => languageremove()}
                                    style={{
                                        backgroundColor: "#e27e45",
                                        borderRadius: 10,
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    <Text style={{
                                        color: "#fff",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "300",
                                        paddingHorizontal: 10,
                                        paddingVertical: 2
                                    }}>
                                        Reset All
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <RadioGroup
                                radioButtons={ratingbutton}
                                onPress={setratingname}
                                selectedId={ratingname}
                                containerStyle={styles.ViewCard}
                            />
                        </View>
                    </View>

                    {/* buttonStyle */}

                    <View
                        style={{ width: '100%', flexDirection: 'row', paddingTop: 15, paddingHorizontal: 10 }}>

                        <View
                            style={{
                                width: '50%',
                                backgroundColor: '#F29D38',
                                borderRadius: 20,
                            }}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => setRatingmodel(false)}>
                                <Text
                                    style={{
                                        color: '#fff',
                                        textAlign: 'center',
                                        padding: 8,
                                        borderRightColor: '#fff',
                                        borderRightWidth: 1,
                                        fontSize: 15,
                                    }}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                        </View>


                        <View
                            style={{
                                width: '50%',
                                backgroundColor: '#fff',
                                borderColor: '#e27e45',
                                borderWidth: 1,
                                borderRadius: 20,
                                marginLeft: 3,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                            <TouchableOpacity
                                onPress={() => setRatingmodel(false)}
                                languagesearchFilterFunction
                                activeOpacity={0.7}
                                style={{
                                }}>
                                <Text
                                    style={{
                                        color: '#F29D38',
                                        textAlign: 'center',
                                        padding: 8,
                                        fontSize: 15,

                                    }}>
                                    Apply Filter
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginBottom: 10 }}></View>
                </View>
            </Modal>

            {/* categorybutton*/}
            <Modal
                isVisible={Categoriesmodel}
                onBackdropPress={() => setCategoriesmodel(false)}
                onSwipeComplete={() => setCategoriesmodel(false)}
                // swipeDirection={['down']}
                backdropOpacity={0.5}
                style={{ justifyContent: 'flex-end', margin: 0 }}
            >
                <View
                    style={{
                        height: "auto",
                        backgroundColor: "#fff",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        left: 0,
                        width: "100%",
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        // paddingHorizontal: 15,
                        borderColor: "#e27e45",
                        borderWidth: 0.55
                    }}>

                    <View style={{ marginTop: 15 }}>
                        <View style={{ width: "100%" }}>


                            <View style={{ paddingHorizontal: 15, flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                <Text style={{ color: "#e27e45", fontSize: responsiveFontSize(2.3), fontWeight: "700" }}>
                                    category
                                </Text>
                                <TouchableOpacity
                                    onPress={() => languageremove()}
                                    style={{
                                        backgroundColor: "#e27e45",
                                        borderRadius: 10,
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    <Text style={{
                                        color: "#fff",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "300",
                                        paddingHorizontal: 10,
                                        paddingVertical: 2
                                    }}>
                                        Reset All
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <RadioGroup
                                radioButtons={categorybutton}
                                onPress={setCategoryname}
                                selectedId={Categoryname}
                                containerStyle={styles.ViewCard}
                            />
                        </View>
                    </View>

                    {/* buttonStyle */}

                    <View
                        style={{ width: '100%', flexDirection: 'row', paddingTop: 15, paddingHorizontal: 10 }}>
                        <View
                            style={{
                                width: '50%',
                                backgroundColor: '#e27e45',
                                borderRadius: 20,
                            }}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => setCategoriesmodel(false)}>
                                <Text
                                    style={{
                                        color: '#fff',
                                        textAlign: 'center',
                                        padding: 8,
                                        borderRightColor: '#fff',
                                        borderRightWidth: 1,
                                        fontSize: 15,
                                    }}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                        </View>


                        <View
                            style={{
                                width: '50%',
                                backgroundColor: '#fff',
                                borderColor: '#e27e45',
                                borderWidth: 1,
                                borderRadius: 20,
                                marginLeft: 3,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                            <TouchableOpacity
                                onPress={() => setCategoriesmodel(false)}
                                languagesearchFilterFunction
                                activeOpacity={0.7}
                                style={{
                                }}>
                                <Text
                                    style={{
                                        color: '#e27e45',
                                        textAlign: 'center',
                                        padding: 8,
                                        fontSize: 15,

                                    }}>
                                    Apply Filter
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginBottom: 10 }}></View>
                </View>
            </Modal>


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

    },
    container: {
        elevation: 10,
        paddingTop: 3,
        marginHorizontal: 12,
    },
    ViewCard: {

        borderRadius: 8,
        overflow: 'hidden',
        flexDirection: "column",
        color: "#e27e45",
        paddingTop: 5,
        alignItems: "flex-start",
        paddingHorizontal: 10,

    }

});